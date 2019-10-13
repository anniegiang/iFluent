@bookings.each do |booking|
  json.set! booking.id do 
    json.startTime TimeSlot.find(booking.time_slot_id).start_time
    json.endTime TimeSlot.find(booking.time_slot_id).end_time
    json.duration LessonItem.find(booking.lesson_item_id).duration
    json.price LessonItem.find(booking.lesson_item_id).price
    json.title Lesson.find(LessonItem.find(booking.lesson_item_id).lesson_id).title
    json.languageName Lesson.find(LessonItem.find(booking.lesson_item_id).lesson_id).language_name
    json.teacher User.find(Teacher.find(Lesson.find(LessonItem.find(booking.lesson_item_id).lesson_id).teacher_id).teacher_id).name
  end
end