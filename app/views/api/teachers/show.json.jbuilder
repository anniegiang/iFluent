json.set! @teacher.id do
    json.partial! 'teacher', teacher: @teacher
end