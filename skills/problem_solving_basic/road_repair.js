function getMinCost(crew_id, job_id) {
  crew_id.sort((a, b) => a - b);
  job_id.sort((a, b) => a - b);

  return crew_id.reduce(
    (sum, c, index) => sum + Math.abs(c - job_id[index]),
    0
  );
}
