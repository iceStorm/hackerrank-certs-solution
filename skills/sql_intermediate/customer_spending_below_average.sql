/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/

SELECT c.customer_name, avgr.average
FROM customer as c,
    (
        SELECT i.customer_id as cid, AVG(i.total_price) as average
        FROM invoice as i
        GROUP BY i.customer_id
    ) as avgr
WHERE c.id = avgr.cid
    AND avgr.average < ((
        SELECT AVG(average)
        FROM (
            SELECT i.customer_id as cid, AVG(i.total_price) as average
            FROM invoice as i
            GROUP BY i.customer_id
        ) as avgr
    ) * 25/100)
