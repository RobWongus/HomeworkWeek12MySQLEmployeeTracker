//App variables
const express = require("express");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql");


const PORT = process.env.PORT || "8817";

//mysql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 8817,
    user: "root",
    password: "ScottSummers2!",
    database: "employee_tracker_db"
});

connection.connect(function(error) {
    if (error) {
        console.log("connected as id: " + connection.threadId);
        start();
    }
})

//Routes Definitions
// app.get("/", (req, res) => {
//    res.status(200).send("YERRR!") 
// });

//Server Activation
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });

function start() {
    inquirer.prompt({
        name: choice,
        type: list,
        message: "Make a choice.",
        choices: [
            "view department",
            "view roles",
            "view employees",
            "add department",
            "add roles",
            "add employee"
            "Quit"
        ]
    })


.then(function(answer) {
    switch (answer.choice) {
    case "view department":
      viewDepartment();
      break;

    case "view roles":
      viewRoles();
      break;

    case "view employees":
      viewEmployee();
      break;

    case "add department":
      addDepartment();
      break;

    case "add role":
      addRole();
      break;
    
    case "add employee":
      addEmployee();
      break;
    }
  });
}

function viewDepartment() {
    let query = "SELECT *FROM department";
    connection.query("SELECT * FROM department WHERE list=?" function (error, response) {
        if (error) {
            throw error;
        }
    })
}
