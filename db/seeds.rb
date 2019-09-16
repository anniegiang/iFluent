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

guest = User.create({
  name: "Guest", 
  email: "guest@aa.io", 
  password: "password", 
  profile_picture: "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/default.13c19308.svg"
});

users = []

24.times do
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    profile_picture: Faker::Avatar.image
  )
  users.push(user)
end

# Teachers
Teacher.destroy_all

def randomTitle 
  titles = ["Professional Teachers", "Community Tutors", "All"]
  return titles.sample
end

teachers = []

users.slice(0, users.length/2).each do |user|
  teacher = Teacher.create(
    teacher_id: user.id,
    country: Faker::Address.country,
    about_me: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
    title: randomTitle,
    video_url: Faker::LoremFlickr.image,
    hourly_rate: Faker::Commerce.price(range: 0..30.0, as_string: false),
    trial_rate: Faker::Commerce.price(range: 0..20.0, as_string: false),
    work_experience: Faker::Job.field,
    education: Faker::Educator.degree,
    certificates: Faker::Number.between(from: 1, to: 10),
  )

  teachers.push(teacher)
end

# Languages
Language.destroy_all
languages = Language.create(
  [
    { language: 'English' }, 
    { language: 'Chinese (Mandarin)'}, 
    { language: 'French' },
    { language: 'Spanish' },
    { language: 'Portuguese' },
    { language: 'German' },
    { language: 'Japanese' },
    { language: 'Korean' },
    { language: 'Arabic' },
    { language: 'Hindi' },
    { language: 'Italian' },
    { language: 'Russian' }
  ]
)

# Teacher teaches
TeacherTeach.destroy_all

(1...12).each do |i|
  TeacherTeach.create({
    language_id: Language.all[i].id,
    teacher_id: Teacher.all[i].id,
    fluency: rand(1..5)
  })
end