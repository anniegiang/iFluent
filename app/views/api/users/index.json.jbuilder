@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :profile_photo
  end
end
