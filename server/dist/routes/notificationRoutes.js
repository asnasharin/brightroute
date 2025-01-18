"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJWT_1 = require("../middleware/verifyJWT");
const notificationControl_1 = require("../controllers/notificationControl");
const router = (0, express_1.Router)();
const notificationController = new notificationControl_1.NotificationControl();
router.get("/getNotifications/:userId", verifyJWT_1.verifyJWT, notificationController.getNotifications);
router.post("/paymentMessage", verifyJWT_1.verifyJWT, notificationController.paymentMessage);
router.post("/mentorNotification/:mentorId", verifyJWT_1.verifyJWT, notificationController.mentorNotification);
router.delete("/delete/:notificationId", verifyJWT_1.verifyJWT, notificationController.deleteNotification);
router.post("/chatNotification/:mentorId", verifyJWT_1.verifyJWT, notificationController.mentorChatNotification);
exports.default = router;