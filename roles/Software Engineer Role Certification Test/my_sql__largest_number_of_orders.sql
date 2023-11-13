SELECT g.CID
FROM
    (
        SELECT COUNT(*) as COUNTS
        FROM ORDERS as o
        GROUP BY o.CUSTOMER_ID
        ORDER BY COUNT(*) DESC
        LIMIT 1
    ) as max_orders,
    (
        SELECT o.CUSTOMER_ID as CID, COUNT(*) as COUNTS
        FROM ORDERS as o
        GROUP BY o.CUSTOMER_ID
        ORDER BY COUNT(*) DESC
    ) as g

WHERE g.COUNTS = max_orders.COUNTS
