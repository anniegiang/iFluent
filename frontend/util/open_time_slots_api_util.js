export const fetchAllOpenTimeSlots = teacherId => {
  return $.ajax({
    method: 'GET',
    url: `/api/open_slots?teacher_id=${teacherId}`
  })
};

export const deleteOpenTimeSlot = openTimeSlotId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/open_slots/${openTimeSlotId}`
  })
};
