# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# Users
User.destroy_all
guest = User.create({name: "Guest", email: "guest@aa.io", password: "password"});

users = []

5.times do 
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password"
  )
  users.push(user)
end

# Teacher Details
TeacherDetail.destroy_all

def randomTitle 
  titles = ["Professional Teachers", "Community Tutors", "All"]
  return titles.sample
end

users.each do |user|
  TeacherDetail.create(
    teacher_id: user.id,
    country: Faker::Address.country,
    about_me: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
    title: randomTitle,
    video_url: Faker::LoremFlickr.image,
    picture_url: Faker::Avatar.image,
    hourly_rate: Faker::Commerce.price(range: 0..30.0, as_string: false) ,
    trial_rate: Faker::Commerce.price(range: 0..20.0, as_string: false) ,
    work_experience: Faker::Job.field,
    education: Faker::Educator.degree,
    certificates: Faker::Number.between(from: 1, to: 10) ,
  )
end



