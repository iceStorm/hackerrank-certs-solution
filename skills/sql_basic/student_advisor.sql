/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/

SELECT s.roll_number, s.name
FROM student_information as s, faculty_information as f
WHERE s.advisor = f.employee_ID
    AND (
        (
            f.gender = "M" AND f.salary > 15000
        )
        OR
        (
            f.gender = "F" AND f.salary > 20000
        )
    )
