const express = require("express");
const connect = require("./database/conn");
const cors = require("cors");

const app = express();
// Middlware
app.use(express.json());
app.use(cors());
const router = require("./router/route");
// GET REquest
app.get("/", (req, res) => {
  res.status(200).send("Home Get Request!");
});

// productApi
app.use("/productApi", router);

const port = 8080;

// server connection
connect().then(() => {
  try {
    app.listen(port),
      () => {
        console.log(`Server Connected to ${port}`);
      };
  } catch (error) {
    console.log("Cannot Connect To Server!");
  }
});
