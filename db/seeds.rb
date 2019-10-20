# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "ice_cube"
require "faker"

ActiveRecord::Base.transaction do 
    Language.destroy_all
    User.destroy_all
    Teacher.destroy_all
    TeacherTeach.destroy_all
    TeacherSpeak.destroy_all
    Lesson.destroy_all
    LessonItem.destroy_all
    TimeSlot.destroy_all

    yaml = YAML.load_file(File.join(Rails.root, 'db', 'seeds.yaml'))
    users = yaml['users']
    languages = yaml['languages']
    teachers = yaml['teachers']
    teacher_teaches = yaml['teacher_teaches']
    teacher_speaks = yaml['teacher_speaks']
    lessons = yaml['lessons']
    lesson_items = yaml['lesson_items']

    # languages
    languages.each do |language|
        Language.create!(language)
    end

    # users
    users.each do |user|
        User.create!(user)
    end

    # teachers
    teachers.each do |teacher|
        Teacher.create!(teacher)
    end

    # teacher teaches
    teacher_teaches.each do |t|
        TeacherTeach.create!(t)
    end

    # teacher speaks
    teacher_speaks.each do |s|
        TeacherSpeak.create!(s)
    end

    # lessons
    lessons.each do |lesson|
        Lesson.create!(lesson)
    end

    # lesson_items
    lesson_items.each do |item|
        LessonItem.create!(item)
    end

    # (10..12).each do |month|
    #     (1..28).each do |day|
    #         (0..24).each do |hour|
    #             start_time = DateTime.new(2019, month, day, hour, 0)
    #             TimeSlot.create({
    #                 start_time: start_time,
    #                 end_time: start_time + 30.minutes,
    #                 occurence: 'daily'
    #             })
    #             TimeSlot.create({
    #                 start_time: start_time + 30.minutes,
    #                 end_time: start_time + 60.minutes,
    #                 occurence: 'daily'
    #             })
    #         end
    #     end
    # end
    



end

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

