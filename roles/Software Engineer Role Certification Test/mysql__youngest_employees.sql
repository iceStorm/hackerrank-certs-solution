/*
Enter your query here.
*/

SELECT eu.UIN, e.name
FROM EMPLOYEE as e JOIN EMPLOYEE_UIN as eu ON e.ID = eu.ID
WHERE e.AGE < 25
ORDER BY e.name ASC, e.ID ASC
