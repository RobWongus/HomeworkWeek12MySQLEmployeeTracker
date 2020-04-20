//App variables
// const expresponses = require("expresponses");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql");
const updateEmployees = require("./js/functions");


const PORT = process.env.PORT || "3306";

//mysql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
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
// app.get("/", (req, response) => {
//    response.status(200).send("YerrorR!") 
// });

// Server Activation
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });

console.table

function start() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "make your choices.",
        choices: [
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

    case "add roles":
      addRole();
      break;
    
    case "add employee":
      addEmployee();
      break;
      
      default:
        console.log("Laters!");
        connection.end();
    }

  });
}

function viewDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function (error, response) {
        if (error) {
            throw error;
        }
        console.table(response)
        start();
    })
}

function viewEmployee() {
    let query = "SELECT * FROM employee";
    connection.query(query, function (error, response) {
        if (error) {
            throw error;
            
        }
        console.table(response)
        start();
    })
}

function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function (error, response) {
        if (error) {
            throw error;
            
        }
        console.table(response)
        start();
    })
}

function addDepartment() {
    inquirer
        .prompt({
            name: "name",
            type: "input",
            message: "Department Name?"
        })
        .then(function(answer) {
           
            connection.query("INSERT INTO department(name) VALUES(?)", [answer.name], function(error, response){
                if(error) throw error;
            })
            console.log("department added");
            start();
        })

}

function addEmployee() {
    let roles = [];
    let query = "SELECT * FROM role";
    connection.query(query,function(error, response) {
        for(let i=0; i < response.length; i++) {
            roles.push(response[i].title);
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
        let roleId
        for(let i = 0; i < roles.length; i++) {
            if (roles[i] === answer.role_id){
                roleId = i + 1;
            }
        }
        let query = "INSERT INTO employee(first_name, Last_name, role_id) VALUES(?, ?, ?)";
        connection.query(query, [answer.first_name, answer.last_name, roleId], function(error, response) {
            if (error) throw error;
            
        })
        console.log("new employee added!");
        start();
    })
}
function addRole() {
    currentDepartment =[];
    let query = "SELECT * FROM department";
    connection.query(query, function(error, response) {
        for(let i = 0; i <response.length; i++) {
            currentDepartment.push(response[i].name);
        };
        console.log(currentDepartment);
    inquirer.prompt([{
        type: "input",
        name: "role_name",
        message: "new role name."
    },
    {
        type: "input",
        name: "role_salary",
        message: "enter salary."
    },
    {
        type: "list",
        name: "department_list",
        message: "choose department",
        choices: currentDepartment
    },
    ])
    .then(function(answer) {
        let departmentID;
    for(let i = 0; i < currentDepartment.length; i++){
        if(currentDepartment[i] === answer.department_list) {
            departmentID = i + 1
        }
    };

    let query = "INSERT INTO role(title, salary, department_id) VALUES(?, ?, ?)";
    connection.query(query, [answer.role_name, answer.role_salary, departmentID], function(error, response){
        if (error) throw error;
        console.log("new role added");
        start();
        });
    });
    });   
}

function updateRole() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(error, response){
        if (error) throw error;
        let currentEmployees = response.map(function(names){
            return `${names.first_name} ${names.last_name}` 
        });
        
        let query2 = "SELECT * FROM employee";
        let currentRoles2 = [];
        connection.query(query2, function(error, response){
            if (error) throw error;
            for(let i=0; i < response.length; i++){
                currentRoles2.push(response[i].title)
            };
        
        inquirer.prompt([{
            type: "list",
            name: "employee_names",
            message: "Select employee you would like to update.",
            choices: currentEmployees
        },{
            type: "list",
            name: "update_role",
            message: "What is the new role?",
            choices: currentRoles2
        },
        ]).then(function(answer){
            //make a comparison variable for role ID
            let id;
            for(let i=0; i< currentEmployees.length; i++){
                if(currentEmployees[i] === answer.employee_names){
                    console.log(id);
                    id = i + 1;
                    break;
                };
            };
            // create a role variable
            let roleID2;
            for(let i =0; i < currentRoles2.length; i++){
                if(currentRoles2[i] === answer.update_role){
                    roleID2 = i + 1;
                    break;
                };
            };

            console.log(roleID2, id);
            let query3 = "UPDATE employees SET role_id = ? WHERE id = ?"
            connection.query(query3, [roleID2, id], function(error, response){
                if(error) throw error;
                console.log("The role has been updated.");
                start();
            });
        });
    });
    });
}

module.exports = {
    start : start()
}