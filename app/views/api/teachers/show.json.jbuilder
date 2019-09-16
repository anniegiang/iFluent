json.set! @teacher.id do
    json.teacherInfo do
        json.partial! 'teacher', teacher: @teacher
    end

    json.userInfo do
        json.user_id @user.id
        json.extract! @user, :name, :profile_picture
    end

    json.taughtLanguages do
        json.extract! @languages_taught, :language
        json.fluency @fluency
    end
end