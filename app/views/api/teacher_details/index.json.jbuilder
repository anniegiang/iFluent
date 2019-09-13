@teacher_details.each do |teacher|
    json.set! teacher.id do
        json.partial! 'teacher', teacher_detail: teacher
  end
end