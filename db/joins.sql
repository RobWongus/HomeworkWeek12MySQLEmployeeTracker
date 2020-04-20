-- SELECT r.title, e.role_id, e.first_name, e.last_name
-- FROM employee e 
-- INNER JOIN role r ON e.role_id = r.id;

SELECT e.id, e.first_name, e.last_name, r.title AS role , d.name AS operation, r.salary
FROM employee e 
INNER JOIN role r ON e.role_id = r.id
INNER JOIN department d ON r.department_id = d.id
ORDER BY e.first_name;


-- SELECT s.name as Student, c.name as Course 
-- FROM student s
--     INNER JOIN bridge b ON s.id = b.sid
--     INNER JOIN course c ON b.cid  = c.id 
-- ORDER BY s.name 




-- "SELECT employees.first_name, employees.last_name, employee_role.title, employee_role.salary, department.name  
-- FROM employees LEFT JOIN employee_role ON employee_role.id = employees.role_id 
-- LEFT JOIN department ON employee_role.department_id = department.id"