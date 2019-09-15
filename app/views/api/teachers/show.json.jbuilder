json.teacherInfo do
    json.partial! 'teacher', teacher: @teacher
end

json.userInfo do
    json.user_id @user.id
    json.extract! @user, :name, :profile_picture
end