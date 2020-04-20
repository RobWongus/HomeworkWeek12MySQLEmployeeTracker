
// const updateEmployees = ("./js/functions");

// function updateRole(){
//     let query = "SELECT * FROM employee";
//     connection.query(query, function(error, response){
//         if (error) throw error;
//         let currentEmployees = response.map(function(names){
//             return `${names.first_name} ${names.last_name}` 
//         });
//         let query2 = "SELECT * FROM employee";
//         let currentRoles2 = [];
//         connection.query(query2, function(error, response){
//             if (error) throw error;
//             for(let i=0; i < response.length; i++){
//                 currentRoles2.push(response[i].title)
//             };
        
//         inquirer.prompt([{
//             type: "list",
//             name: "employee_names",
//             message: "Select employee you would like to update.",
//             choices: currentEmployees
//         },{
//             type: "list",
//             name: "update_role",
//             message: "What is the new role?",
//             choices: currentRoles2
//         },
//         ]).then(function(answer){
//             //make a comparison variable for role ID
//             let id;
//             for(let i=0; i< currentEmployees.length; i++){
//                 if(currentEmployees[i] === answer.employee_names){
//                     console.log(id);
//                     id = i + 1;
//                     break;
//                 };
//             };
//             // create a role variable
//             let roleID2;
//             for(let i =0; i < currentRoles2.length; i++){
//                 if(currentRoles2[i] === answer.update_role){
//                     roleID2 = i + 1;
//                     break;
//                 };
//             };

//             console.log(roleID2, id);
//             let query3 = "UPDATE employees SET role_id = ? WHERE id = ?"
//             connection.query(query3, [roleID2, id], function(error, response){
//                 if(error) throw error;
//                 console.log("The role has been updated.");
//                 start();
//             });
//         });
//     });
//     });
// }

// module.exports = updateEmployees