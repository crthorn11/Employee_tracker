INSERT INTO department (dept_id, dept_name)
VALUES (100, 'Management'),
       (200, 'Parts'),
       (300, 'Manufacturing');

INSERT INTO role (job_title, role_id, dept_id, salary)
VALUES ('Manufacturing_manager', 30, 300, 2000.00),
       ('Parts_manager', 20, 200, 1500.00),
       ('Manager', 10, 100, 1800.00);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Cody', 'Yonker', 30, 1),
       (002, 'Frank', 'Kronk', 20, 2),
       (003, 'Sarah', 'Ramp', 10, 2),
       (004, 'Tom', 'Willt', 10, 2),
       (005, 'Alexis', 'Ammde',10, 3);