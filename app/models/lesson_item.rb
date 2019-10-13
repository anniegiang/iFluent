# == Schema Information
#
# Table name: lesson_items
#
#  id        :bigint           not null, primary key
#  lesson_id :integer          not null
#  duration  :integer          not null
#  price     :float            not null
#

class LessonItem < ApplicationRecord
  validates :lesson_id, :duration, :price, presence: true

  belongs_to :lesson,
    primary_key: :id,
    foreign_key: :lesson_id,
    class_name: 'Lesson'

  has_many :bookings,
    primary_key: :id,
    foreign_key: :lesson_item_id,
    class_name: 'Booking'

end
