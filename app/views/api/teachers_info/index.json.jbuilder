@teachers_detail.each do |teacher|
    json.set! teacher.id do
        json.partial! 'teacher', teachers_detail: teacher
  end
end