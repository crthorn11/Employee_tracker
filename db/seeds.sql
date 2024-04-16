INSERT INTO employees (emp_no, first_name, last_name, gender, hire_date)
VALUES (001, 'Cody', 'Yonker', 'M', '2004-02-04'),
       (002, 'Frank', 'Kronk', 'M', '2007-12-17'),
       (003, 'Sarah', 'Ramp', 'F', '2013-04-15'),
       (004, 'Tom', 'Willt', 'M', '2018-09-04'),
       (005, 'Alexis', 'Ammde', 'F', '2020-01-31');

INSERT INTO departments (dept_no, dept_name)
VALUES (006, 'Parts'),
       (007, 'Manufacturing');

INSERT INTO department_manager (emp_no, dept_no)
VALUES (002, 006),
       (001, 007);