SELECT o.CUSTOMER_ID
FROM ORDERS as o
GROUP BY o.CUSTOMER_ID
HAVING COUNT(*) = (
    SELECT MAX(g.COUNTS)
    FROM (
        SELECT o.CUSTOMER_ID as ID, COUNT(*) as COUNTS
        FROM ORDERS as o
        GROUP BY o.CUSTOMER_ID
    ) as g
)
