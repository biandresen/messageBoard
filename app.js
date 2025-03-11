import express from "express";
import { newMessageRouter } from "./routes/newMessage.js";
import { indexRouter } from "./routes/index.js";

const app = express();
const PORT = 3100;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/newMessage", newMessageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
