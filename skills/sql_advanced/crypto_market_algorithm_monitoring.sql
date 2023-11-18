-- MS SQL SERVER

SET NOCOUNT ON;

/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/

with difference as (

SELECT
        *,
        DATEDIFF(minute,lag(dt) OVER (ORDER BY sender,dt),dt) as difF_minute,
          ROW_NUMBER() OVER(ORDER BY sender,dt) as rownumber
FROM    transactions
--ORDER BY sender,dt
  
)
,rn as (
SELECT
        rownumber
FROM    difference
WHERE   rownumber IN(
  SELECT
           rownumber
  FROM   transactions
  WHERE  abs(diff_minute) < 60
)
--order by sender,dt
)

,sequences as ( 
SELECT 
        *
FROM    difference
WHERE rownumber IN(
SELECT 
        rownumber 
FROM    rn
UNION
SELECT rownumber - 1 as rownumber
FROM   rn
 )
--order by sender,dt
)
SELECT 
       sender,
       MIN(dt) as Sequence_start,
       MAX(dt) as Sequence_end,
       COUNT(rownumber) as transactions_count,
       SUM(amount) as transactions_sum
FROM   sequences
GROUP BY sender
HAVING SUM(amount) >= 150
order by sender,MIN(dt),MAX(dt)


go
