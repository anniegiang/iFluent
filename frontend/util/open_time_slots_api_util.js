export const fetchAllOpenTimeSlots = teacherId => {
  return $.ajax({
    method: "GET",
    url: `/api/open_slots?teacher_id=${teacherId}`
  });
};
