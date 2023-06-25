const express = require("express");
const router = require("./config/routes");
const database = require("./config/database.js");

const app = express();
const port = process.env.PORT || 3030;

const start = async () => {
  app.use(express.json({ limit: "50mb" }));

  await database();
  router(app);

  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};

start();