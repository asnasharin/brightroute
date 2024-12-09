import { Request, Response } from "express";
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";
import Admin from "../models/Admin";

export class AdminAuthControls {
  
  async adminLogin(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        res.status(400).json({ message: "Invalid Credentials" });
        return;
      }

      // Check if admin exists
      const admin = await Admin.findOne({ email });
      if (!admin) {
        res.status(400).json({ message: "Email does not exist" });
        return;
      }

      // Decrypt and verify the password
      const decryptedPassword = CryptoJS.AES.decrypt(
        admin.password,
        process.env.HASH_KEY as string
      ).toString(CryptoJS.enc.Utf8);

      if (password !== decryptedPassword) {
        res.status(400).json({ message: "Incorrect Password" });
        return;
      }

      // Generate access and refresh tokens
      const accessToken = Jwt.sign(
        {
          UserInfo: {
            id: admin._id,
            email: admin.email,
            roles: admin.role,
          },
        },
        process.env.ACCESS_TOKEN_SECRETE as string,
        { expiresIn: "3d" }
      );

      const refreshToken = Jwt.sign(
        { email: admin.email },
        process.env.REFRESH_TOKEN_SECRETE as string,
        { expiresIn: "7d" }
      );

      // Set the refresh token as an HTTP-only cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // Set to `true` in production with HTTPS
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      // Respond with success and token
      res.status(200).json({
        status: "success",
        user: {
          _id: admin._id,
          email: admin.email,
          role: admin.role,
        },
        accessToken,
      });
    } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ error: "An internal server error occurred" });
    }
  }

  /**
   * Admin Signup
   * Creates a new admin account with encrypted password.
   */
  async adminSignup(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, role } = req.body;

      // Validate input
      if (!email || !password || !role) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      // Check if the email is already registered
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        res.status(400).json({ message: "Admin with this email already exists" });
        return;
      }

      // Encrypt the password
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.HASH_KEY as string
      ).toString();

      // Create a new admin
      const newAdmin = new Admin({
        email,
        password: hashedPassword,
        role,
      });

      // Save to the database
      const savedAdmin = await newAdmin.save();

      // Respond with success
      res.status(201).json({
        status: "success",
        message: "Admin registered successfully",
        admin: {
          _id: savedAdmin._id,
          email: savedAdmin.email,
          role: savedAdmin.role,
        },
      });
    } catch (error) {
      console.error("Error during admin signup:", error);
      res.status(500).json({ error: "An internal server error occurred" });
    }
  }
}
