DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE  employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);


CREATE TABLE role (
id INTEGER ,
title VARCHAR(30),
salary DECIMAL,
department_id INTEGER, 
FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY (id)
);

CREATE TABLE  employee (
id INTEGER,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
FOREIGN KEY (role_id) REFERENCES role(id),
PRIMARY KEY (id)
);



