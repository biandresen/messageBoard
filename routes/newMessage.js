import express from "express";
import { controller } from "../controller.js";
const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", { title: "Create Message" });
});

newMessageRouter.post("/", controller.createMessage);

export { newMessageRouter };
