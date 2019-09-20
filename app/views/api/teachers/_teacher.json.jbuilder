json.extract! teacher, 
    :id,
    :teacher_id, 
    :country, 
    :about_me,
    :title,
    :video_url,
    :hourly_rate,
    :trial_rate,
    :work_experience,
    :education,
    :certificates
    json.name teacher.teacher_user.name
    json.profilePicture teacher.teacher_user.profile_picture

teacher.languages_spoken.each do |language|
    json.language_spoken language.language
end

teacher.languages.each do |language|
    json.language_taught language.language
end