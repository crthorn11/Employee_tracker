INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Cody', 'Yonker', 30, 001),
       (002, 'Frank', 'Kronk', 20, 200),
       (003, 'Sarah', 'Ramp', 10, 200),
       (004, 'Tom', 'Willt', 10, 200),
       (005, 'Alexis', 'Ammde',10, 300);

INSERT INTO departments (dept_id, dept_name)
VALUES (200, 'Parts'),
       (300, 'Manufacturing');

INSERT INTO role (job_title, role_id, dept_id, salary)
VALUES ('Manufacturing_manager', 30, 300, 156700),
       ('Parts_manager', 20, 200, 115300),
       ('Worker', 10, 100, 60000);