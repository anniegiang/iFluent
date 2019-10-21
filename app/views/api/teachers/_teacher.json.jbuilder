total = 0
teacher.lessons.each do |lesson|
    total += lesson.lessons_taught
end

json.extract! teacher, 
    :id,
    :teacher_id, 
    :country, 
    :about_me,
    :title,
    :video_url,
    :hourly_rate,
    :trial_rate
    json.name teacher.user.name
    json.profilePictureUrl teacher.user.profile_picture_url
    json.totalLessons total

teacher.languages_spoken.each do |language|
    json.language_spoken language.language
end

teacher.languages_taught.each do |language|
    json.language_taught language.language
end

