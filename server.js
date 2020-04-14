const express = require("express");
const inquirer = require("inquirer");
const path = require("path");
const mysql = require("mysql");
//App variables

const app = express();
const PORT = process.env.PORT || "8817";

//mysql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

//Routes Definitions
app.get("/", (req, res) => {
   res.status(200).send("YERRR!") 
});

//Server Activation
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});