INSERT INTO department (name)
VALUES ("X-MEN");


INSERT INTO role (title,salary, department_id)
VALUES ("Blue Team", 50000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Scott", "Summers", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Howlett", 1, 1);
