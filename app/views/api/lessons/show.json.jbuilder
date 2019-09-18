json.set! @lesson.id do
    json.partial! 'lesson', lesson: @lesson
end