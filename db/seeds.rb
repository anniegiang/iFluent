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
languages = Language.create(
  [
    { language: 'English' }, 
    { language: 'Chinese (Mandarin)'}, 
    { language: 'French' },
    { language: 'Spanish' },
    { language: 'Portuguese' },
    { language: 'German' },
  ]
)

# # Users
User.destroy_all

guest = User.create({
  name: "Guest", 
  email: "guest@aa.io", 
  password: "password", 
  profile_picture: "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/default.13c19308.svg"
})

# ---- ENGLISH ----

# USER 1
user1 = User.create({
  name: "Rogers Stephen",
  email: Faker::Internet.email,
  password: "password",
  profile_picture: "https://imagesavatar-static01.italki.com/1T035196670_Avatar.jpg"
})

eng1 = Teacher.create(
  teacher_id: user1.id,
  country: "United States",
  about_me: "All lessons are fun and engaging. My main goal is to help you gain confidence and fluency so that you can communicate clearly without feeling uncomfortable. As language learners, we can be very hard on ourselves, and not very patient when we make mistakes. But mistakes are actually a necessary part of the process. ;) I will correct your mistakes but in a very gentle way. I have many resources I can share with you and lots of advice that will help you improve very quickly!"
  title: "Community Teacher",
  video_url: "https://www.youtube.com/watch?v=BxeZ4pYfHPU",
  hourly_rate: 10.50,
  trial_rate: 8.35,
  work_experience: Faker::Job.field,
  education: Faker::Educator.degree,
  certificates: Faker::Number.between(from: 1, to: 10),
)

TeacherTeach.create({
  language_id: languages[1].id,
  teacher_id: eng1.id,
  fluency: 5
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: eng1.id,
  fluency: 4
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: eng1.id,
  fluency: 3
})

Lesson.create({
  teacher_id: eng1.id,
  language_id: languages[1].id,
  title: "Trial lesson",
  description: "Hello! We'll get to know each other a little bit and find out how we can help you improve together!",
  category: "Trial",
  price: 8.35,
  duration: 30,
})

Lesson.create({
  teacher_id: eng1.id,
  language_id: languages[1].id,
  title: "Great Conversations! Increase Your Confidence While Speaking English!",
  description: "In these lessons I will help you improve your conversation skills and confidence! xD We can plan to talk about specific topics like ordering food, or technology, or just have free conversation. Talking with me will feel like talking with a friend. ;) I will correct your mistakes and we will learn new words and expressions together!",
  category: "Conversation Practice",
  price: 16.50,
  duration: 45,
})


# USER 2

user2 = User.create({
  name: "Morrison Shelby",
  email: Faker::Internet.email,
  password: "password",
  profile_picture: "https://imagesavatar-static01.italki.com/1T051411590_Avatar.jpg"
})

eng2 = Teacher.create(
  teacher_id: user2.id,
  country: "United States",
  about_me: "I love teaching English to people around the world and specialize in teaching adults at the intermediate to advanced stages.  I have a degree in Educational Studies and a 200hr CELTA certificate. I love traveling and exchanging culture, so teaching English to students around the world is quite exciting. I focus on fluency and confidence, using real-world situations. You'll learn common phrases, idioms, vocabulary and more to handle everyday situations.",
  title: "Professional Teacher",
  video_url: "https://www.youtube.com/watch?v=BxeZ4pYfHPU",
  hourly_rate: 17.00,
  trial_rate: 10.00,
  work_experience: Faker::Job.field,
  education: Faker::Educator.degree,
  certificates: Faker::Number.between(from: 1, to: 10),
)

TeacherTeach.create({
  language_id: languages[1].id,
  teacher_id: eng2.id,
  fluency: 5
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: eng2.id,
  fluency: 2
})

Lesson.create({
  teacher_id: eng2.id,
  language_id: languages[1].id,
  title: "Trial lesson",
  description: "Experience a typical Fluency lesson with me. Learn new vocabulary, watch a funny clip, and get to know my teaching style. Let's see if we're a good match!",
  category: "Trial",
  price: 10.00,
  duration: 30,
})

Lesson.create({
  teacher_id: eng2.id,
  language_id: languages[1].id,
  title: "Informal Tutoring",
  description: "Are you intermediate or advanced and need someone to practice speaking English with? Let me help! You choose the topic and I'll help you by using new phrases, idioms, and vocabulary. You can practice your listening, asking questions, and responding. If you prefer I choose the topic, let me know!",
  category: "Trial",
  price: 17.00,
  duration: 60,
})


# ---- CHINESE ----

# USER 3
user3 = User.create({
  name: "Patrick",
  email: Faker::Internet.email,
  password: "password",
  profile_picture: "https://imagesavatar-static01.italki.com/3T043188030_Avatar.jpg"
})


chinese1 = Teacher.create(
  teacher_id: user3.id,
  country: "China",
  about_me: "大家好，我叫Patrick,我的母语是中文，我是一名地地道道的中国人。
  我的中文名字叫石鹏，我住在成都，我希望通过italki这个平台和来自世界各地的朋友分享汉语知识，帮助中文爱好者提高他们的中文水平。
  I work as a professional Chinese teacher, I teach Chinese language to local students, since I've got so many foreign friends from all over the world, it makes me wonder what would happen if I combine these two, which is to teach foreign friends Chinese. so here I am,I'll be very happy to help you with your vocabulary, pronunciation, written characters and overcome all the difficulties you've come across when learning Chinese!"
  title: "Professional Teacher",
  video_url: "https://www.youtube.com/embed/aBx0FwTu104?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  hourly_rate: 14.00,
  trial_rate: 12.00,
  work_experience: Faker::Job.field,
  education: Faker::Educator.degree,
  certificates: Faker::Number.between(from: 1, to: 10),
)

TeacherTeach.create({
  language_id: languages[2].id,
  teacher_id: chinese1.id,
  fluency: 5
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: chinese1.id,
  fluency: 3
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: chinese1.id,
  fluency: 2
})

Lesson.create({
  teacher_id: chinese1.id,
  language_id: languages[2].id,
  title: "Trial lesson",
  description: "In the trial lesson, we'll talk about your learning plan, goal and preferences, just feel free to book a lesson !",
  category: "Trial",
  price: 12.00,
  duration: 30,
})

Lesson.create({
  teacher_id: chinese1.id,
  language_id: languages[2].id,
  title: "Customized lessons",
  description: "We'll have a trial lesson first in which we'd talk about your learning plan and preferences,  either you're a begginer in learning Chinese or you've already had some foundation of Chinese, all lessons are customized for your needs."
  category: "General",
  price: 45.00,
  duration: 17.50,
})

# USER 4

user4 = User.create({
  name: "Linda",
  email: Faker::Internet.email,
  password: "password",
  profile_picture: "https://imagesavatar-static01.italki.com/4T064805780_Avatar.jpg"
})

chinese2 = Teacher.create(
  teacher_id: user4.id,
  country: "China",
  about_me: "I am confident that I have the kindness and patience to be a teacher, and I believe that the combination of these factors and professional knowledge can bring students a good learning experience!"
  title: "Professional Teacher",
  video_url: "https://www.youtube.com/embed/2f45Smme_o0?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  hourly_rate: 14.00,
  trial_rate: 8.00,
  work_experience: Faker::Job.field,
  education: Faker::Educator.degree,
  certificates: Faker::Number.between(from: 1, to: 10),
)

TeacherTeach.create({
  language_id: languages[2].id,
  teacher_id: chinese2.id,
  fluency: 5
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: chinese2.id,
  fluency: 3
})

Lesson.create({
  teacher_id: chinese2.id,
  language_id: languages[2].id,
  title: "Common conversation practice",
  description: "In this lesson, we can talk about topics whatever you want in order to improve students' spoken Chinese. I can help you correct your grammar and pronunciation throughout the course.",
  category: "General",
  price: 9.00,
  duration: 45,
})

Lesson.create({
  teacher_id: chinese2.id,
  language_id: languages[2].id,
  title: "Let's improve our Chinese with Boya Chinese！",
  description: "In this session, students will be taught Chinese with the semi-intermediate level of Boya Chinese as the teaching material. Every unit will be taught with 5 periods, so every 5 sessions will be set as one package.",
  category: "General",
  price: 12.00,
  duration: 60,
})

# ---- FRENCH ---- 

# USER 5

user5 = User.create({
  name: "Sébastien",
  email: Faker::Internet.email,
  password: "password",
  profile_picture: "https://imagesavatar-static01.italki.com/2T008918630_Avatar.jpg"
})

french1 = Teacher.create(
  teacher_id: user5.id,
  country: "France",
  about_me: "I can draw from my extensive experience in learning languages abroad and at home to help you achieve fluency in your target language. I have had the opportunity of meeting many polyglots at numerous polyglot gatherings/conferences, and the people I met at these events have taught me a number of techniques that I can share with you.",
  title: "Community Tutor",
  video_url: "https://www.youtube.com/embed/JALWWYZLZjM?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  hourly_rate: 15.50,
  trial_rate: 4.50,
  work_experience: Faker::Job.field,
  education: Faker::Educator.degree,
  certificates: Faker::Number.between(from: 1, to: 10),
)

TeacherTeach.create({
  language_id: languages[3].id,
  teacher_id: french1.id,
  fluency: 5
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: french1.id,
  fluency: 3
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: french1.id,
  fluency: 4
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: french1.id,
  fluency: 5
})

Lesson.create({
  teacher_id: french1.id,
  language_id: languages[3].id,
  title: "Trial lesson",
  description: "I will make you speak a lot, I will write down very detailed corrections and I'm flexible.",
  category: "Trial",
  price: 4.50,
  duration: 30,
})

Lesson.create({
  teacher_id: french1.id,
  language_id: languages[3].id,
  title: "Informal Tutoring",
  description: "Regular conversation lessons. We will usually talk about what you did during the week for the first few minutes, then pick a topic together for the rest of the lesson. At the end of the lesson we will review to vocabulary and practice pronunciation.",
  category: "Conversation Practice",
  price: 19.50,
  duration: 45,
})

# ---- Spanish ----

# USER 6

user6 = User.create({
  name: "Victoria Cáceres",
  email: Faker::Internet.email,
  password: "password",
  profile_picture: "https://imagesavatar-static01.italki.com/9T038756090_Avatar.jpg"
})

spanish1 = Teacher.create(
  teacher_id: user6.id,
  country: " Argentina",
  about_me: "Hi! I´m Victoria a Spanish teacher from Buenos Aires, Argentina. I love languages, so that´s why I studied to become a Spanish teacher. I ´ve studied in International House Buenos Aires to become a Spanish Teacher for foreign people. I have experience in teaching people from all over the world, and different levels. I love travelling and I used to teach people, or just give conversation classes in order to improve their pronunciation and fluency. I teach people from A1 level (begginers) up to C2 (advanced). Classes are based on your own personal goals, so you may achieve them in an easy and quickly way. Contact me to ask any question you would like to know. See you!!! :D",
  title: "Professional Teacher",
  video_url: "https://www.youtube.com/embed/yEOtlamNFEE?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  hourly_rate: 8.00,
  trial_rate: 7.50,
  work_experience: Faker::Job.field,
  education: Faker::Educator.degree,
  certificates: Faker::Number.between(from: 1, to: 10),
)

TeacherTeach.create({
  language_id: languages[4].id,
  teacher_id: spanish1.id,
  fluency: 5
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: spanish1.id,
  fluency: 3
})

TeacherSpeak.create({
  language_id: languages.sample.id,
  teacher_id: spanish1.id,
  fluency: 3
})

Lesson.create({
  teacher_id: spanish1.id,
  language_id: languages[4].id,
  title: "Writing correction - Corrección de textos",
  description: "Need some help with your homework?
  Do you need to correct an essay, email, CV or any kind of text?
  Send it and i will send it back to with corrections :D",
  category: "General",
  price: 8.00,
  duration: 45,
})

Lesson.create({
  teacher_id: spanish1.id,
  language_id: languages[4].id,
  title: "Spanish Classes / Clases de Español",
  description: "Classes based on your own interests and goals. I provide books and audios. I may give you homework to practice if you need. Don´t hesitate to ask any doubts you have :D",
  price: 15.00,
  duration: 60,
})

Lesson.create({
  teacher_id: spanish1.id,
  language_id: languages[4].id,
  title: "Conversación / conversation",
  description: "¡Hablaremos en español todo el tiempo! (si lo necesitas, podemos traducir algunas palabras en inglés u otros idiomas). Trabajaremos tu fluidez al hablar y distintas situaciones de comunicación.
  Sólo para estudiantes intermedio-avanzados y avanzados.",
  price: 13.50,
  duration: 60,
})

# ---- Portuguese ---- 

# USER 7 


# users = []
# vid_url = [
#   "https://v.italki.cn/xitalki100031658.mp4",
#   "https://v.italki.cn/xitalki100016625.mp4",
#   "https://v.italki.cn/xitalki100029598.mp4",
#   "https://v.italki.cn/xitalki100030565.mp4",
#   "https://v.italki.cn/xitalki100022403.mp4",
#   "https://v.italki.cn/xitalki100032801.mp4",
#   "https://v.italki.cn/xitalki100021439.mp4",
#   "https://v.italki.cn/xitalki100025584.mp4",
#   "https://v.italki.cn/xitalki100017337.mp4",
#   "https://v.italki.cn/xitalki100026899.mp4",
#   "https://v.italki.cn/xitalki100033723.mp4",
#   "https://www.youtube.com/embed/WAl88MpARH4?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/Vx0hBKiHclo?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/gtkL2faqLyY?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/r_IoOinoH7s?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/sgGl7FD9ZX4?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/Sdox8YdhKAE?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/9vE16nnkfYg?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/vLCXQarl0WU?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/E1TiJW1yxkw?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/dOh1tjYVs20?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/esGAhzLYBVo?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/yY8-MyOKaSo?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/sjZjrp_BUQM?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/W6-phwW5uz8?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/kIrPMwE04ms?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
#   "https://www.youtube.com/embed/f4vXgzM0lhg?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
# ]

# pic_url = [
#   "https://imagesavatar-static01.italki.com/T062853910_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T038639550_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/5T030951701_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T058978680_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/2T055083430_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T041224710_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/8T015671220_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T058076150_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/T038328532_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T057901190_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/4T024114984_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/8T016504020_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T055005920_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/4T030233289_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/24T014533410_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/19T016224830_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/14T035080570_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T057538080_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/T054506930_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/15T040382660_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T060199630_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/8T036780330_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/T054370530_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/1T027946779_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/T064042050_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/T049874910_Avatar.jpg",
#   "https://imagesavatar-static01.italki.com/5T031561200_Avatar.jpg"
# ]

# 24.times do
#   user = User.create(
#     name: Faker::Name.name,
#     email: Faker::Internet.email,
#     password: "password",
#     profile_picture: pic_url.sample
#   )
#   users.push(user)
# end

# # Teachers
# Teacher.destroy_all

# titles = ["Professional Teacher", "Community Tutor", "All"]
# teachers = []

# users.slice(0, users.length/2).each do |user|
#   teacher = Teacher.create(
#     teacher_id: user.id,
#     country: Faker::Address.country,
#     about_me: Faker::Lorem.paragraph(sentence_count: 24, supplemental: false, random_sentences_to_add: 4),
#     title: titles.sample,
#     video_url: vid_url.sample,
#     hourly_rate: Faker::Commerce.price(range: 20.0..30.0, as_string: false),
#     trial_rate: Faker::Commerce.price(range: 0..20.0, as_string: false),
#     work_experience: Faker::Job.field,
#     education: Faker::Educator.degree,
#     certificates: Faker::Number.between(from: 1, to: 10),
#   )

#   teachers.push(teacher)
# end


# # Teacher teaches
# TeacherTeach.destroy_all

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

# # Teacher Speaks

# # Lessons
# Lesson.destroy_all

# lesson_cat = ["General", "Trial lesson", "Conversation Practice", "Instant tutoring", "Test Preparation"]
# lesson_title = ["Trial lesson", "Informal teaching", "Formal tutoring with materials", "Conversational", "Business vocabulary", "For absolute beginners", "For advanced students", "For intermediate students", "Test prep"]
# duration = [15, 30, 45, 60, 120]

# teachers.each do |teacher|
#   3.times do
#     Lesson.create({
#       teacher_id: teacher.id,
#       language_id: languages.sample.id,
#       title: lesson_title.sample,
#       description: Faker::Lorem.paragraph(sentence_count: 24, supplemental: false, random_sentences_to_add: 4),
#       category: lesson_cat.sample,
#       price: teacher.hourly_rate,
#       duration:  duration.sample,
#     });
#   end
# end


