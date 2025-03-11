import express from "express";
import { messages } from "../messages.js";

const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", { title: "Create Message" });
});

newMessageRouter.post("/", (req, res) => {
  const userName = req.body.userName;
  const messageText = req.body.messageText;
  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: userName,
    added: new Date(),
  });
  res.redirect("/");
});

export { newMessageRouter };
