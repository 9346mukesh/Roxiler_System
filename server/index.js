const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const initializeDatabase = require("./config/initDatabase");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Store Management API Running");
});

const startServer = async () => {
  try {
    await initializeDatabase();

    app.listen(process.env.PORT, () => {
      console.log(
        `Server running on http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.error("Server startup stopped because the database is not ready");
  }
};

startServer();