INSERT INTO employees (emp_no, first_name, last_name, gender, hire_date, job_title, role_no, dept_no, salary_no)
VALUES (001, 'Cody', 'Yonker', 'M', '2004-02-04', 'Manufacturing_manager', 30, 156700),
       (002, 'Frank', 'Kronk', 'M', '2007-12-17', 'Parts_manager', 20, 115300),
       (003, 'Sarah', 'Ramp', 'F', '2013-04-15', 'Worker', 10, 200, 60000),
       (004, 'Tom', 'Willt', 'M', '2018-09-04', 'Worker', 10, 200, 60000),
       (005, 'Alexis', 'Ammde', 'F', '2020-01-31', 'Worker', 10, 300, 60000);

INSERT INTO departments (dept_no, dept_name)
VALUES (200, 'Parts'),
       (300, 'Manufacturing');

INSERT INTO department_manager (emp_no, dept_no)
VALUES (002, 300),
       (001, 200);

INSERT INTO employee_roles (job_title, role_no, dept_no, salary_no)
VALUES ('Manufacturing_manager', 30, 300, 156700),
       ('Parts_manager', 20, 200, 115300),
       ('Worker', 10, 100, 60000);