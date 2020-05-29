// const mysql = require("mysql");
// const util = require("util");

// //const PORT = process.env.PORT || 8080;
// const connection = mysql.createConnection({
//     host: "localhost",
//     // Your username
//     user: "root",
//     // Your password
//     password: "root",
//     database: "employee_DB"
// });

// connection.connect();

// //allows us to use the promises
// connection.query = util.promisify(connection.query);

// class DB {
//     constructor(connection) {
//         this.connection = connection;
//     }
//         findAllEmployees() {
//             return this.connection.query(
//               "SELECT * FROM employee"
//             );
//         };
//     }
// module.exports = new DB(connection);


// , 
//               department.name AS department, 
//               role.salary, CONCAT(manager.first_name, ' ', manager.last_name) 
//               AS manager FROM employee 
//               LEFT JOIN role on employee.role_id = role.id 
//               LEFT JOIN department on role.department_id = department.id LEFT 
//               JOIN employee manager on manager.id = employee.manager_id;