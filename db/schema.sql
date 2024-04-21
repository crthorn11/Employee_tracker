DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE employees (
    emp_no       INT             NOT NULL,
    first_name   VARCHAR(14)     NOT NULL,
    last_name    VARCHAR(16)     NOT NULL,
    gender       ENUM ('M', 'F') NOT NULL,
    hire_date    DATE            NOT NULL,
    job_title    VARCHAR(16)     NOT NULL,
    role_no      INT             NOT NULL,
    dept_no      INT             NOT NULL,
    salary_no    INT             NOT NULL,
    PRIMARY KEY  (emp_no)
);

CREATE TABLE employee_roles (
    job_title    VARCHAR(30)     NOT NULL,
    role_no      INT             NOT NULL,
    dept_no      INT             NOT NULL,
    salary_no    INT             NOT NULL,
    PRIMARY KEY  (role_no)
);

CREATE TABLE departments (
    dept_no     INT            NOT NULL,
    dept_name   VARCHAR(16)    NOT NULL,
    PRIMARY KEY (dept_no, dept_name)
);

CREATE TABLE department_manager (
    emp_no     INT                  NOT NULL,
    dept_no    INT                  NOT NULL,
    PRIMARY KEY (emp_no, dept_no)
);

