const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");
const { logger } = require("./middlewares");

const PORT = process.env.PORT || 5000;
const app = express();


// Middleware at Application level
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use of Custom Middleware
app.use(logger);
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to Clothnest Backend");
});

app.listen(PORT, () => {
  console.log(`Server Started , Listening on port ${process.env.PORT}`);
});
