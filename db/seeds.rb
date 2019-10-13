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
User.destroy_all

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

eng1 = Teacher.create(
  teacher_id: user_teacher1.id,
  trial_rate: 8.00,
  hourly_rate: 11.00,
  title: "Professional Teacher",
  country: "United States",
  video_url: "https://www.youtube.com/watch?v=kVXcqvpJYcI",
  about_me: "Hi, I'm Andrew! I was born and grew up in Sheffield, England. I have also lived in Taiwan for over a year and currently I live with my wife in the Philippines. In England I helped my family operate a construction business for a number of years before I moved overseas to teach English.I really enjoy teaching English online as it allows me to meet many interesting people and work remotely.My interests include traveling, culture, music, food, cycling, nature etc.I also love meeting new people and helping them to improve their English."
)

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

# LessonEnrollment.create({
#   lesson_id: lesson1.id,
#   student_id: student1.id
# })

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

# LessonEnrollment.create({
#   lesson_id: lesson2.id,
#   student_id: student2.id
# })

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

# # USER 2

# user2 = User.create({
#   name: "Morrison Shelby",
#   email: Faker::Internet.email,
#   password: "password",
#   profile_picture: "https://imagesavatar-static01.italki.com/1T051411590_Avatar.jpg"
# })

# eng2 = Teacher.create(
#   teacher_id: user2.id,
#   country: "United States",
#   about_me: "I love teaching English to people around the world and specialize in teaching adults at the intermediate to advanced stages.  I have a degree in Educational Studies and a 200hr CELTA certificate. I love traveling and exchanging culture, so teaching English to students around the world is quite exciting. I focus on fluency and confidence, using real-world situations. You'll learn common phrases, idioms, vocabulary and more to handle everyday situations.",
#   title: "Professional Teacher",
#   video_url: "https://v.italki.cn/xitalki100020338.mp4",
#   hourly_rate: 17.99,
#   trial_rate: 10.99,
#   work_experience: Faker::Job.field,
#   education: Faker::Educator.degree,
#   certificates: Faker::Number.between(from: 1, to: 10),
# )

# TeacherTeach.create({
#   language_id: english.id,
#   teacher_id: eng2.id,
#   fluency: 5
# })

# TeacherSpeak.create({
#   language_id: languages.sample.id,
#   teacher_id: eng2.id,
#   fluency: 2
# })

# Lesson.create({
#   teacher_id: eng2.id,
#   language_id: english.id,
#   title: "Trial lesson",
#   description: "Experience a typical Fluency lesson with me. Learn new vocabulary, watch a funny clip, and get to know my teaching style. Let's see if we're a good match!",
#   category: "Trial",
#   price: 10.99,
#   duration: 30,
# })

# Lesson.create({
#   teacher_id: eng2.id,
#   language_id: english.id,
#   title: "Informal Tutoring",
#   description: "Are you intermediate or advanced and need someone to practice speaking English with? Let me help! You choose the topic and I'll help you by using new phrases, idioms, and vocabulary. You can practice your listening, asking questions, and responding. If you prefer I choose the topic, let me know!",
#   category: "Trial",
#   price: 17.50,
#   duration: 60,
# })


# # # ---- CHINESE ----

# # USER 3
# user3 = User.create({
#   name: "Patrick",
#   email: Faker::Internet.email,
#   password: "password",
#   profile_picture: "https://imagesavatar-static01.italki.com/3T043188030_Avatar.jpg"
# })


# chinese1 = Teacher.create(
#   teacher_id: user3.id,
#   country: "China",
#   about_me: "大家好，我叫Patrick,我的母语是中文，我是一名地地道道的中国人。
#   我的中文名字叫石鹏，我住在成都，我希望通过italki这个平台和来自世界各地的朋友分享汉语知识，帮助中文爱好者提高他们的中文水平。
#   I work as a professional Chinese teacher, I teach Chinese language to local students, since I've got so many foreign friends from all over the world, it makes me wonder what would happen if I combine these two, which is to teach foreign friends Chinese. so here I am,I'll be very happy to help you with your vocabulary, pronunciation, written characters and overcome all the difficulties you've come across when learning Chinese!",
#   title: "Professional Teacher",
#   video_url: "https://www.youtube.com/embed/aBx0FwTu104?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   hourly_rate: 14.55,
#   trial_rate: 12.99,
#   work_experience: Faker::Job.field,
#   education: Faker::Educator.degree,
#   certificates: Faker::Number.between(from: 1, to: 10),
# )

# TeacherTeach.create({
#   language_id: chinese.id,
#   teacher_id: chinese1.id,
#   fluency: 5
# })

# TeacherSpeak.create({
#   language_id: languages.sample.id,
#   teacher_id: chinese1.id,
#   fluency: 3
# })

# TeacherSpeak.create({
#   language_id: languages.sample.id,
#   teacher_id: chinese1.id,
#   fluency: 2
# })

# Lesson.create({
#   teacher_id: chinese1.id,
#   language_id: chinese.id,
#   title: "Trial lesson",
#   description: "In the trial lesson, we'll talk about your learning plan, goal and preferences, just feel free to book a lesson !",
#   category: "Trial",
#   price: 12.99,
#   duration: 30,
# })

# Lesson.create({
#   teacher_id: chinese1.id,
#   language_id: chinese.id,
#   title: "Customized lessons",
#   description: "We'll have a trial lesson first in which we'd talk about your learning plan and preferences,  either you're a begginer in learning Chinese or you've already had some foundation of Chinese, all lessons are customized for your needs.",
#   category: "General",
#   price: 45.35,
#   duration: 17.55,
# })

# # # USER 4

# user4 = User.create({
#   name: "Linda",
#   email: Faker::Internet.email,
#   password: "password",
#   profile_picture: "https://imagesavatar-static01.italki.com/4T064805780_Avatar.jpg"
# })

# chinese2 = Teacher.create(
#   teacher_id: user4.id,
#   country: "China",
#   about_me: "I am confident that I have the kindness and patience to be a teacher, and I believe that the combination of these factors and professional knowledge can bring students a good learning experience!",
#   title: "Professional Teacher",
#   video_url: "https://www.youtube.com/embed/2f45Smme_o0?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   hourly_rate: 14.30,
#   trial_rate: 8.99,
#   work_experience: Faker::Job.field,
#   education: Faker::Educator.degree,
#   certificates: Faker::Number.between(from: 1, to: 10),
# )

# TeacherTeach.create({
#   language_id: chinese.id,
#   teacher_id: chinese2.id,
#   fluency: 5
# })

# TeacherSpeak.create({
#   language_id: languages.sample.id,
#   teacher_id: chinese2.id,
#   fluency: 3
# })

# Lesson.create({
#   teacher_id: chinese2.id,
#   language_id: chinese.id,
#   title: "Common conversation practice",
#   description: "In this lesson, we can talk about topics whatever you want in order to improve students' spoken Chinese. I can help you correct your grammar and pronunciation throughout the course.",
#   category: "Conversation Practice",
#   price: 9.50,
#   duration: 45,
# })

# Lesson.create({
#   teacher_id: chinese2.id,
#   language_id: chinese.id,
#   title: "Let's improve our Chinese with Boya Chinese！",
#   description: "In this session, students will be taught Chinese with the semi-intermediate level of Boya Chinese as the teaching material. Every unit will be taught with 5 periods, so every 5 sessions will be set as one package.",
#   category: "General",
#   price: 12.99,
#   duration: 60,
# })



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

