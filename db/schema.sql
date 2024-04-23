DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    dept_id     INT            NOT NULL,
    dept_name   VARCHAR(30)    NOT NULL,
    PRIMARY KEY (dept_id)
);

CREATE TABLE role (
    job_title    VARCHAR(30)     NOT NULL,
    role_id      INT             NOT NULL,
    dept_id      INT             NOT NULL,
    salary       DECIMAL         NOT NULL,
    PRIMARY KEY  (role_id),
    FOREIGN KEY  (dept_id) REFERENCES department(dept_id)
);


CREATE TABLE employee (
    emp_id       INT             NOT NULL,
    first_name   VARCHAR(14)     NOT NULL,
    last_name    VARCHAR(16)     NOT NULL,
    role_id      INT             NOT NULL,
    manager_id   INT,            
    PRIMARY KEY  (emp_id),
    FOREIGN KEY (role_id) REFERENCES role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employee(emp_id)
);

