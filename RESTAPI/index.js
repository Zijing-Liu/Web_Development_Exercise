require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

mongoose.connect(process.env.DATABASE_RUL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => console.log("Connected to Databse"));

app.use(express.json());

const tshirtRouter = require();

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👚",
    size: "large",
    price: 100,
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({
      message: "we need a logo",
    });

    res.send({
      tshirt: `👚 with your ${logo}`,
    });
  }
});

app.listen(PORT, () => {
  console.log("server started");
});
