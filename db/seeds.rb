# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
    Language.destroy_all
    User.destroy_all
    Teacher.destroy_all
    TeacherTeach.destroy_all
    TeacherSpeak.destroy_all
    Lesson.destroy_all
    LessonItem.destroy_all
    TimeSlot.destroy_all
    OpenSlot.destroy_all

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

    # time_slots - 10/2019- 12/2019
    (10..12).each do |month|
        (1..31).each do |day|
            (0..24).each do |hour|
                next if month.odd? && day > 30
                start_time = DateTime.new(2019, month, day, hour, 0)
                TimeSlot.create({
                    start_time: start_time,
                })
                TimeSlot.create({
                    start_time: start_time + 30.minutes,
                })
            end
        end
    end

    # # time_slots - 1/2020- 9/2020
    # (1..9).each do |month|
    #     (1..31).each do |day|
    #         (0..24).each do |hour|
    #             next if month == 2 && day > 28 
    #             next if (month.even? || month != 8 || month == 9) && day > 30  

    #             start_time = DateTime.new(2020, month, day, hour, 0)
    #             p start_time
    #             p "================"
    #             TimeSlot.create({
    #                 start_time: start_time,
    #             })
    #             TimeSlot.create({
    #                 start_time: start_time + 30.minutes,
    #             })
    #         end
    #     end
    # end

    # open_slots
    time_slots ||= TimeSlot.all
    Teacher.all.each do |teacher|
        10.times do |i|
            rand_time_slot = time_slots.sample
            OpenSlot.create!(teacher_id: teacher.id, time_slot_id: rand_time_slot.id)
        end
    end


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

