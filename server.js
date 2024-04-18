const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_tracker'
}, console.log(`Connected to the employee_tracker database.`));

// Query database
// db.query('SELECT * FROM employees', function (err, results) {
//   console.log(results);
// });
const viewAllEmployees = () => {
  const query = 'SELECT * FROM employees';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving employees:', err);
      return;
    }
    console.log('All Employees:');
    console.table(results); // Using console.table to nicely display the results in a table format
  });
};

//Inquirer prompts below

const promptUser = () => {
  inquirer.prompt([
    {
      name: 'choices',
      type: 'list',
      message: 'Please select an option:',
      choices: [
        'View All Employees',
        'View All Roles',
        'View All Departments',
        'View All Employees By Department',
        'View Department Budgets',
        'Update Employee Role',
        'Update Employee Manager',
        'Add Employee',
        'Add Role',
        'Add Department',
        'Exit'
      ]
    }
  ]).then((answers) => {
    const { choices } = answers;

    if (choices === 'View All Employees') {
      viewAllEmployees();
    }

    if (choices === 'View All Departments') {
      viewAllDepartments();
    }

    if (choices === 'View All Employees By Department') {
      viewEmployeesByDepartment();
    }

    if (choices === 'Add Employee') {
      addEmployee();
    }

    if (choices === 'Update Employee Role') {
      updateEmployeeRole();
    }

    if (choices === 'View All Roles') {
      viewAllRoles();
    }

    if (choices === 'Add Role') {
      addRole();
    }

    if (choices === 'Add Department') {
      addDepartment();
    }

    if (choices === 'Exit') {
      connection.end();
    }
  });
};

promptUser();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});