SELECT r.title, e.role_id, e.first_name, e.last_name
FROM employee e 
INNER JOIN role r ON e.role_id = r.id;

SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary
FROM employee e, role r, department d
INNER JOIN
    INNER JOIN role r ON e.role_id = r.id;
