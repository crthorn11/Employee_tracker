INSERT INTO employees (emp_no, first_name, last_name, gender, hire_date)
VALUES (001, 'Cody', 'Yonker', 'M', '06/31/2004'),
       (002, 'Frank', 'Kronk' 'M', '12/17/2007'),
       (003, 'Sarah', 'Ramp', 'F', '04/15/2010'),
       (004, 'Tom', 'Willt' 'M', '09/03/2018'),
       (005, 'Alexis', 'Ammde', 'F', '01/31/2020');

INSERT INTO departments (dept_no, dept_name)
VALUES (010, 'Parts'),
       (020, 'Manufacturing');

INSERT INTO department_manager (emp_no, dept_no, from_date, to_date)
VALUES (0100, 'Parts'),
       (0200, 'Manufacturing');