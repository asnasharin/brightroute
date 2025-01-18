"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_controller_1 = require("../controllers/chat.controller");
const verifyUser_1 = require("../middleware/verifyUser");
const router = (0, express_1.Router)();
const chatControls = new chat_controller_1.ChatControls();
router.post("/roomId", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.roomId);
router.post("/conversation", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.makeConversation);
router.get("/conversation", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.getConversation);
router.get("/mentee/conversation/:menteeId/:mentorId", verifyUser_1.Authentication.ensureAuth(["mentee"]), chatControls.getSingleConversation);
router.get("/mentor/conversation/:mentorId/:menteeId", verifyUser_1.Authentication.ensureAuth(["mentor"]), chatControls.getSingleConversationMentor);
router.post("/message", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.newMessage);
router.get("/allConversation/:conversationId", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.getAllConversation);
router.get("/getUser/:friendId", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.getFriendDetails);
router.patch("/message/delete/:messageId", verifyUser_1.Authentication.ensureAuth(["mentee", "mentor"]), chatControls.deleteMessage);
exports.default = router;
