# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
const guest = User.create({name: "Guest", email: "guest@aa.io", password: "password"});
const user1 = User.create({name: "user1", email: "user1@aa.io", password: "password"});

TeacherDetail.create({
  teacher_id: 2,
  country: "USA",
  about_me: "This is a random piece of sentence that acts a place holder",
  title: "Professional Teacher",
  video_url: "https://www.youtube.com/watch?v=tXPZ6R6iEWQ",
  picture_url: "https://imagesavatar-static01.italki.com/T054942180_Avatar.jpg",
  hourly_rate: 8.00,
  trial_rate: 10.00
});
