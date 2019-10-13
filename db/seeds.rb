# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# Languages
Language.destroy_all

english = Language.create({ language: 'English' })
chinese = Language.create({ language: 'Chinese (Mandarin)'})
french = Language.create({ language: 'French' })
spanish = Language.create({ language: 'Spanish' })
portuguese = Language.create({ language: 'Portuguese' })
german = Language.create({ language: 'German' })
japanese = Language.create({ language: 'Japanese' })
korean = Language.create({ language: 'Korean' })
arabic = Language.create({ language: 'Arabic' })
hindi = Language.create({ language: 'Hindi' })
italian = Language.create({ language: 'Italian' })
russian = Language.create({ language: 'Russian' })

languages = [
  english, 
  chinese, 
  french, 
  spanish, 
  portuguese, 
  german, 
  japanese, 
  korean, 
  arabic,
  hindi,
  italian,
  russian
]

# Users

guest = User.create({
  name: "Guest", 
  email: "guest@aa.io", 
  password: "guestuser", 
  profile_picture_url: "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/default.13c19308.svg",
  profile_about_me: "I am a guest user!"
})

student1 = User.create({
  name: "Annie",
  email: "annie@gmail.com",
  password: "password", 
  profile_about_me: "Hi! My name is Annie. I love to learn new languages. Looking forward to meeting new people and learning new cultures."
})

student2 = User.create({
  name: "Jake",
  email: "jake@gmail.com",
  password: "password", 
  profile_about_me: "Hi! My name is Jake. I love to learn new languages. Looking forward to meeting new people and learning new cultures."
})

# ---- ENGLISH ----

user_teacher1 = User.create({
  name: "Andrew Bradbury",
  email: Faker::Internet.email,
  password: "password",
  profile_picture_url: "https://imagesavatar-static01.italki.com/T026578497_Avatar.jpg"
})

eng1 = Teacher.create({
  teacher_id: user_teacher1.id,
  trial_rate: 8.00,
  hourly_rate: 11.00,
  title: "Professional Teacher",
  country: "United States",
  video_url: "https://www.youtube.com/watch?v=kVXcqvpJYcI",
  about_me: "Hi, I'm Andrew! I was born and grew up in Sheffield, England. I have also lived in Taiwan for over a year and currently I live with my wife in the Philippines. In England I helped my family operate a construction business for a number of years before I moved overseas to teach English. I really enjoy teaching English online as it allows me to meet many interesting people and work remotely. My interests include traveling, culture, music, food, cycling, nature etc. I also love meeting new people and helping them to improve their English."
})

t = Time.new

ts1 = TimeSlot.create({
  teacher_id: eng1.id,
  start_time: t,
  end_time: t + 10*60,
  available: false
})

ts2 = TimeSlot.create({
  teacher_id: eng1.id,
  start_time: t + 10*60,
  end_time: t + 10*60 + 10*60,
  available: false
})

ts3 = TimeSlot.create({
  teacher_id: eng1.id,
  start_time: t + 10*60 + 10*60,
  end_time: t + 10*60 + 10*60 + 10*60,
  available: true
})

TeacherTeach.create({
  language_id: english.id,
  teacher_id: eng1.id,
  fluency: rand(4..5)
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: eng1.id,
  fluency: rand(1..5)
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: eng1.id,
  fluency: rand(1..5)
})

lesson1 = Lesson.create({
  teacher_id: eng1.id,
  lessons_taught: 237,
  language_name: "English",
  title: "Trial lesson",
  category: "Trial",
  description: "In a trial lesson I will demonstrate my teaching methods. It also gives me an opportunity to understand what level the student is at and make a lesson plan.",
})

lesson_item1 = LessonItem.create({
  lesson_id: lesson1.id,
  duration: 30,
  price: 8.00
})

lesson2 = Lesson.create({
  teacher_id: eng1.id,
  language_name: "English",
  lessons_taught: 727,
  title: "Practical Grammar Lessons",
  description: "We follow an online curriculum together that helps improve all aspects of the English language. Lessons are made to suit your needs and interests. Subject material includes tenses, grammar rules, prepositions, articles and much more! Materials will be provided and homework can be assigned.",
  category: "General",
})

lesson_item2 = LessonItem.create({
  lesson_id: lesson2.id,
  duration: 30,
  price: 11.50
})

lesson_item2 = LessonItem.create({
  lesson_id: lesson2.id,
  duration: 45,
  price: 15.00
})

lesson_item3 = LessonItem.create({
  lesson_id: lesson2.id,
  duration: 60,
  price: 18.00
})

lesson3 = Lesson.create({
  teacher_id: eng1.id,
  language_name: "English",
  lessons_taught: 1079,
  title: "English Conversation",
  description: "Subjects we can talk about include travel, sports, music, food, photography, cycling or any other subject that interests you. We can work to improve your vocabulary, pronunciation, grammar and confidence to have conversations in English.",
  category: "Conversation Practice",
})

lesson_item4 = LessonItem.create({
  lesson_id: lesson3.id,
  duration: 30,
  price: 11.00
})

lesson_item2 = LessonItem.create({
  lesson_id: lesson3.id,
  duration: 45,
  price: 14.50
})

lesson_item3 = LessonItem.create({
  lesson_id: lesson3.id,
  duration: 60,
  price: 17.00
})

lesson4 = Lesson.create({
  teacher_id: eng1.id,
  language_name: "English",
  lessons_taught: 233,
  title: "TOEFL Preparation",
  description: "In this course I will help you prepare for the four part of the TOEFL exam, however more attention is paid to the speaking and writing parts as these are usually the most challenging for most students. Having said that, the lessons will be tailored to you individual needs. After each session, homework for the writing part of the test will be assigned. I will mark the homework and we will discuss your written work in each following session.",
  category: "Test Preparation",
})

lesson_item5 = LessonItem.create({
  lesson_id: lesson4.id,
  duration: 30,
  price: 13.00
})

lesson_item6 = LessonItem.create({
  lesson_id: lesson4.id,
  duration: 60,
  price: 20.00
})

lesson_item7 = LessonItem.create({
  lesson_id: lesson4.id,
  duration: 90,
  price: 28.00
})

Booking.create({
  teacher_id: eng1.id,
  student_id: guest.id,
  lesson_item_id: lesson_item1.id,
  time_slot_id: ts1.id,
})

Booking.create({
  teacher_id: eng1.id,
  student_id: guest.id,
  lesson_item_id: lesson_item2.id,
  time_slot_id: ts2.id,
})


# lang = ["a", "b"]
# t = [1, 2, 3, 4]

# x = 0
# y = 0
# c = 0

# while x < languages.length
# 	c = 0
# 	while y < teachers.length
# 		if c == 8
# 			c = 0
#       x += 1
#       if x != languages.length
#         TeacherTeach.create({
#           language_id: languages[x].id,
#           teacher_id: teachers[y].id,
#           fluency: rand(1..5)
#         })
#         y += 1
#         c += 1
#       else
#         break
#       end
#     else
#       if x != languages.length
#         TeacherTeach.create({
#           language_id: languages[x].id,
#           teacher_id: teachers[y].id,
#           fluency: rand(1..5)
#         })
#         c += 1
#         y += 1
#       else
#         break
#       end
# 		end
# 	end
# 	break
# end

