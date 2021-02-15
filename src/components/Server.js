const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Qwerty@87.",
  database: "LoginSystem",
});
app.listen(8000, () => {
  console.log("running server");
});
