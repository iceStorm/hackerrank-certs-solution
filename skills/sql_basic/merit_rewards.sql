/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/

SELECT e.employee_ID, e.name
FROM employee_information as e, last_quarter_bonus as l
WHERE e.division = "HR"
    AND e.employee_ID = l.employee_ID
    AND l.bonus >= 5000
