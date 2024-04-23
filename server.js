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
const viewAllRole = () => {
  const query = 'SELECT * FROM role';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving employee:', err);
      return;
    }
    console.table(results);
    promptUser();
  });
};

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

const viewAllDepartment = () => {
  const query = 'SELECT * FROM department';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving employee:', err);
      return;
    }
    console.table(results);
    promptUser();
  });
};

const addDepartment = () => {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        name: 'dept_id',
        type: 'input',
        message: "Enter the Department ID:"
      },
      {
        name: 'dept_name',
        type: 'input',
        message: "Enter the department name:"
      },
    ]).then((answers) => {
      const { dept_id, dept_name } = answers;

      const query = 'INSERT INTO department (dept_id, dept_name) VALUES (?, ?)';
      db.query(query, [dept_id, dept_name], (err, result) => {
        if (err) {
          console.error('Error adding department:', err);
          reject(err);
        } else {
          console.log('Department added successfully!');
          resolve();
        }
      });
    });
  });
};

const addRole = () => {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        name: 'job_title',
        type: 'input',
        message: "Enter the Role Job Title:"
      },
      {
        name: 'role_id',
        type: 'input',
        message: "Enter the role ID:"
      },
      {
        name: 'dept_id',
        type: 'input',
        message: "Enter the department id:"
      },
      {
        name: 'salary',
        type: 'input',
        message: "Enter the role salary:"
      },
    ]).then((answers) => {
      const { job_title, role_id, dept_id, salary } = answers;

      const query = 'INSERT INTO role (job_title, role_id, dept_id, salary) VALUES (?, ?, ?, ?)';
      db.query(query, [ job_title, role_id, dept_id, salary ], (err, result) => {
        if (err) {
          console.error('Error adding role:', err);
          reject(err);
        } else {
          console.log('Role added successfully!');
          resolve();
        }
      });
    });
  });
};

const addEmployee = () => {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        name: 'emp_id',
        type: 'input',
        message: "Enter the employee's ID:"
      },
      {
        name: 'first_name',
        type: 'input',
        message: "Enter the employee's first name:"
      },
      {
        name: 'last_name',
        type: 'input',
        message: "Enter the employee's last name:"
      },
      {
        name: 'role_id',
        type: 'input',
        message: "Enter the employee's role ID:"
      },
      {
        name: 'manager_id',
        type: 'input',
        message: "Enter the employee's manager ID (if applicable):"
      }
    ]).then((answers) => {
      const { emp_id, first_name, last_name, role_id, manager_id } = answers;

      const query = 'INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)';
      db.query(query, [ emp_id, first_name, last_name, role_id, manager_id], (err, result) => {
        if (err) {
          console.error('Error adding employee:', err);
          reject(err);
        } else {
          console.log('Employee added successfully!');
          resolve();
        }
      });
    });
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
        'View All Employee',
        'View All Role',
        'View All Department',
        'Add Employee',
        'Add Role',
        'Add Department',
        'Exit'
      ]
    }
  ]).then((answers) => {
    const { choices } = answers;

    if (choices === 'View All Employee') {
      viewAllEmployee();
    }

    if (choices === 'View All Department') {
      viewAllDepartment();
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

    if (choices === 'View All Role') {
      viewAllRole();
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