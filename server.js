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

// Server Activation
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });

function start() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Make a choice.",
        choice: [
            "view department",
            "view roles",
            "view employees",
            "add department",
            "add roles",
            "add employee",
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
    connection.query("SELECT * FROM department WHERE list=?", function (error, response) {
        if (error) {
            throw error;
            start()
        }
    })
}

function viewEmployee() {
    let query = "SELECT * FROM roles employee";
    connection.query("SELECT * FROM role WHERE list=?", function (error, response) {
        if (error) {
            throw error;
            start()
        }
    })
}

function viewRole() {
    let query = "SELECT * FROM roles";
    connection.query("SELECT * FROM role WHERE list=?", function (error, response) {
        if (error) {
            throw error;
            start();
        }
    })
}

function addDepartment() {
    inquirer
        .prompt({
            name: "artist",
            type: "input",
            message: "Department Name?"
        })
        .then(function(answer) {
            var query = "SELECT employee.first_name. employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.department_id, department.name";
            connection.query("INSERT INTO department(name) VALUES(?)", [answer.name_department], function(error, response){
                if(error) throw error;
            })
        })
    start();
}

function addEmployee() {
    let roles = [];
    let query = "SELECT * FROM employee_role";
    connection.query(query,function(error, response) {
        for(let i=0; i < response.length; i++) {
            roles.push(response[i].name);
        }
    }) 
    inquirer.prompt([{
       name: "first_name",
       type: "input",
       message: "enter first name."
    }, 
        
     { 
       name: "last_name",
       type: "input",
       message: "enter last name."
    },
    
    {
       name: "role_id",
       type: "list",
       message: "choose your role.",
       choices: roles
    },
        
    ])
    .then(function(answer){
        console.log(answer)
    })
    start();
}
function addRole() {
    start();
}


// Server Activation
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });