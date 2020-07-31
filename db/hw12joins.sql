SELECT e.id, e.first_name, e.last_name, r.title AS role , d.name AS operation, r.salary
FROM employee e 
INNER JOIN role r ON e.role_id = r.id
INNER JOIN department d ON r.department_id = d.id
ORDER BY e.first_name;
