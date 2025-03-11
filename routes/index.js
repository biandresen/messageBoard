import express from "express";
import { messages } from "../messages.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.get("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.render("messageDetails", {
    title: "Message " + id,
    message: messages[id - 1],
  });
});

export { indexRouter };
