/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/

SELECT p.sku, p.product_name
FROM PRODUCT as p
WHERE p.id NOT IN (
    SELECT i.product_id as pid
    FROM INVOICE_ITEM as i
    GROUP BY i.product_id
)
ORDER BY p.sku ASC
