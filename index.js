import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("Olá, T6!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})