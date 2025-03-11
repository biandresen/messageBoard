import express from "express";
import { messages } from "../messages.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

export { indexRouter };
