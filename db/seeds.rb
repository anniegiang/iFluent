# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
guest = User.create({name: "Guest", email: "guest@aa.io", password: "password"});

5.times do 
  User.create(
    name: Faker::Name.name ,
    email: Faker::Internet.email,
    password: "password"
  )
end


# TeacherDetail.destroy_all
