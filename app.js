import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { message: "Test message" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
