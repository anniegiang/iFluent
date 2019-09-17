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

192.times do
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    profile_picture: Faker::LoremFlickr.image
  )
  users.push(user)
end

# Teachers
Teacher.destroy_all

def randomTitle 
  titles = ["Professional Teacher", "Community Tutor", "All"]
  return titles.sample
end

teachers = []

users.slice(0, users.length/2).each do |user|
  teacher = Teacher.create(
    teacher_id: user.id,
    country: Faker::Address.country,
    about_me: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
    title: randomTitle,
    video_url: Faker::LoremPixel.image,
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
# teacherTeach = 0

# (0...12).each do |langIdx|
#   (teacherTeach..teachers.length-1).each do |teacherIdx|
#     teacherSkip = 0
#     if teacherSkip < 2
#       puts "innnnn"
#       debugger
#       # TeacherTeach.create({
#       #   language_id: Language.all[langIdx].id,
#       #   teacher_id: Teacher.all[teacherIdx].id,
#       #   fluency: rand(1..5)
#       # })
#       teacherTeach += 1
#       teacherSkip += 1
#     else
#       next
#     end
#   end
# end

# (0...languages.length).each do |langIdx|
#   teachers.shuffle.each_with_index do |teacher, teacherIdx|
#     next if teacherIdx > 2
    # TeacherTeach.create({
    #     language_id: languages[langIdx].id,
    #     teacher_id: teacher.id,
    #     fluency: rand(1..5)
    #   })
#   end
# end

lang = ["a", "b"]
t = [1, 2, 3, 4]

x = 0
y = 0
c = 0

while x < languages.length
	c = 0
	while y < teachers.length
		if c == 8
			c = 0
      x += 1
      if x != languages.length
        TeacherTeach.create({
          language_id: languages[x].id,
          teacher_id: teachers[y].id,
          fluency: rand(1..5)
        })
      
			# puts languages[x]
			# puts teachers[y]
        y += 1
        c += 1
      else
        break
      end
    else
      if x != languages.length
        TeacherTeach.create({
          language_id: languages[x].id,
          teacher_id: teachers[y].id,
          fluency: rand(1..5)
        })
        # puts lang[x]
        # puts t[y]
        c += 1
        y += 1
      else
        break
      end
		end
	end
	break
end