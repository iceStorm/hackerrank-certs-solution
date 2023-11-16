
SET SESSION group_concat_max_len = 1000000; -- increase max length for group concat

WITH 
ranked_scores AS (
    SELECT 
        event_id,
        participant_name,
        score,
        DENSE_RANK() OVER (
            PARTITION BY event_id 
            ORDER BY score DESC
        ) as ranking
    FROM (
        SELECT event_id, participant_name, MAX(score) as score
        FROM scoretable
        GROUP BY event_id, participant_name
    ) t
)
SELECT
    event_id,
    GROUP_CONCAT(CASE WHEN ranking = 1 THEN participant_name END ORDER BY participant_name) as first,
    GROUP_CONCAT(CASE WHEN ranking = 2 THEN participant_name END ORDER BY participant_name) as second,
    GROUP_CONCAT(CASE WHEN ranking = 3 THEN participant_name END ORDER BY participant_name) as third
FROM ranked_scores
GROUP BY event_id
ORDER BY event_id;
