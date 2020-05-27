DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45),
  PRIMARY KEY (id)
);
SELECT * FROM department;

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);
SELECT * FROM role;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL,
  PRIMARY KEY (id)
);
SELECT * FROM employee;
