/*
Enter your query here.
*/

SELECT e1.name, e2.name
FROM employee as e1, employee as e2
WHERE e1.salary < e2.salary
ORDER BY e1.id ASC, e2.salary ASC
