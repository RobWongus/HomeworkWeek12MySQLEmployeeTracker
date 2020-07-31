INSERT INTO department (name)
VALUES ("OSI"), ("The Guild"), ("Mercenary");

----------------------------------------------------------

INSERT INTO role (title,salary, department_id)
VALUES ("Hero", 75000, 1), ("Villain", 52000, 2), 
("For Hire", 38000, 3);

----------------------------------------------------------

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thaddeus", "Venture", 1, 1), 
("Malcom", "Fitzcarraldo", 2, 1),
("Molotov", "Cocktail", 3, 1 );