export const fetchAllTimeSlots = teacherId => {
  return $.ajax({
    method: "GET",
    url: `/api/time_slots?teacher_id=${teacherId}`
  });
};
