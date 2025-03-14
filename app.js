import express from "express";
import { newMessageRouter } from "./routes/newMessage.js";
import { indexRouter } from "./routes/index.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3600;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/newMessage", newMessageRouter);
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
