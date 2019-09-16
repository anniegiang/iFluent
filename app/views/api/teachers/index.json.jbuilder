@teachers.each do |teacher|
    json.set! teacher.id do
        json.partial! 'teacher', teacher: teacher
    end
end