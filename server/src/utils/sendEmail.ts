import nodemailer from "nodemailer";
import Otp from "../models/Otp";
import cryptojs from "crypto-js";

function generateOTP(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

const sendEmailOtp = async (
  firstName: string,
  lastName: string,
  email: string
): Promise<boolean> => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL as string,
        pass: process.env.NODEMAILER_PASS as string,
      },
    });

    const otp = generateOTP();
    const hashedOTP = cryptojs.AES.encrypt(
      otp.toString(),
      process.env.HASH_KEY as string
    ).toString();

    await Otp.updateOne(
      { email },
      { $set: { email, otp: hashedOTP } },
      { upsert: true }
    );

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL as string,
      to: email,
      subject: "BrightRoute OTP",
      html: `<p>Hi ${firstName || ""} ${lastName || ""}, your OTP is <strong>${otp}</strong>.</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmailOtp;
