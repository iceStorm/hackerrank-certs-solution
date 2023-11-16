SELECT si.roll_number, si.name
FROM student_information as si, examination_marks as em
WHERE si.roll_number = em.roll_number 
    AND (em.subject_one + em.subject_two + em.subject_three) < 100
