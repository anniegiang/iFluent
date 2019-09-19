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
vid_url = [
  "https://v.italki.cn/xitalki100031658.mp4",
  "https://v.italki.cn/xitalki100016625.mp4",
  "https://v.italki.cn/xitalki100029598.mp4",
  "https://v.italki.cn/xitalki100030565.mp4",
  "https://v.italki.cn/xitalki100022403.mp4",
  "https://v.italki.cn/xitalki100032801.mp4",
  "https://v.italki.cn/xitalki100021439.mp4",
  "https://v.italki.cn/xitalki100025584.mp4",
  "https://v.italki.cn/xitalki100017337.mp4",
  "https://v.italki.cn/xitalki100026899.mp4",
  "https://v.italki.cn/xitalki100033723.mp4",
  "https://www.youtube.com/embed/WAl88MpARH4?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/Vx0hBKiHclo?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/gtkL2faqLyY?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/r_IoOinoH7s?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/sgGl7FD9ZX4?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/Sdox8YdhKAE?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/9vE16nnkfYg?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/vLCXQarl0WU?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/E1TiJW1yxkw?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/dOh1tjYVs20?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/esGAhzLYBVo?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/yY8-MyOKaSo?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/sjZjrp_BUQM?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/W6-phwW5uz8?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/kIrPMwE04ms?enablejsapi=1&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/f4vXgzM0lhg?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
]

pic_url = [
  "https://imagesavatar-static01.italki.com/T062853910_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T038639550_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/5T030951701_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T058978680_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/2T055083430_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T041224710_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/8T015671220_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T058076150_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/T038328532_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T057901190_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/4T024114984_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/8T016504020_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T055005920_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/4T030233289_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/24T014533410_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/19T016224830_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/14T035080570_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T057538080_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/T054506930_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/15T040382660_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T060199630_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/8T036780330_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/T054370530_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/1T027946779_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/T064042050_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/T049874910_Avatar.jpg",
  "https://imagesavatar-static01.italki.com/5T031561200_Avatar.jpg"
]

192.times do
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    profile_picture: pic_url.sample
  )
  users.push(user)
end

# Teachers
Teacher.destroy_all

titles = ["Professional Teacher", "Community Tutor", "All"]
teachers = []

users.slice(0, users.length/2).each do |user|
  teacher = Teacher.create(
    teacher_id: user.id,
    country: Faker::Address.country,
    about_me: Faker::Lorem.paragraph(sentence_count: 24, supplemental: false, random_sentences_to_add: 4),
    title: titles.sample,
    video_url: vid_url.sample,
    hourly_rate: Faker::Commerce.price(range: 20.0..30.0, as_string: false),
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
        c += 1
        y += 1
      else
        break
      end
		end
	end
	break
end

# Teacher Speaks

# Lessons
Lesson.destroy_all

lesson_cat = ["General", "Trial lesson", "Conversation Practice", "Instant tutoring", "Test Preparation"]
lesson_title = ["Trial lesson", "Informal teaching", "Formal tutoring with materials", "Conversational", "Business vocabulary", "For absolute beginners", "For advanced students", "For intermediate students", "Test prep"]
duration = [15, 30, 45, 60, 120]

teachers.each do |teacher|
  3.times do
    Lesson.create({
      teacher_id: teacher.id,
      language_id: languages.sample.id,
      title: lesson_title.sample,
      description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
      category: lesson_cat.sample,
      price: teacher.hourly_rate,
      duration:  duration.sample,
    });
  end
end

#  teacher_id  :integer          not null
#  language_id :integer          not null
#  title       :string           not null
#  description :text             not null
#  category    :string           not null
#  price       :float            not null
#  duration    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#