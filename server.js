const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

try {
  // Connect to database
const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: 'employee_tracker'
}, console.log(`Connected to the employee_tracker database.`));

// Query database
const viewAllEmployee = () => {
  const query = 'SELECT * FROM employee';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving employee:', err);
      return;
    }
    console.table(results);
    promptUser();
  });
};

//  const viewAllRoles = () = => {
//    const query = ''
//  }

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
} catch (error) {
  console.log(error);
}