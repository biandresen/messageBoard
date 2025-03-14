import express from "express";
import { controller } from "../controller.js";

const indexRouter = express.Router();

indexRouter.get("/", controller.getAllMessages);

indexRouter.get("/messages/:id", controller.getMessageById);

export { indexRouter };
