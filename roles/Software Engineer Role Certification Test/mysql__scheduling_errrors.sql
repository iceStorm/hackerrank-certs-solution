/*
Enter your query here.
Please append a semicolon ";" at the end of the query
*/

SELECT DISTINCT p.name, c.name
FROM professor as p
    JOIN schedule as s ON s.professor_id = p.id
    JOIN course as c ON s.course_id = c.id
WHERE c.department_id <> p.department_id
