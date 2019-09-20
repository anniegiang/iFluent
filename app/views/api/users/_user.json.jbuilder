json.extract! user, :id, :name, :profile_picture

json.enrolledLessons do
    user.enrolled_lessons.each do |lesson|
        json.set! lesson.id do
            json.extract! lesson, :id, :teacher_id, :title, :description, :category, :price, :duration
        end
    end
end