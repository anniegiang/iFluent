# == Schema Information
#
# Table name: bookings
#
#  id             :bigint           not null, primary key
#  teacher_id     :integer          not null
#  student_id     :integer          not null
#  lesson_item_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  start_time     :datetime         not null
#  duration       :integer          not null
#

class Booking < ApplicationRecord
  validates :teacher_id, :student_id, :lesson_item_id, :start_time, :duration, presence: true

  belongs_to :teacher,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'Teacher'

  belongs_to :student,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: 'User'

  belongs_to :lesson_item,
    primary_key: :id,
    foreign_key: :lesson_item_id,
    class_name: 'LessonItem'

  # belongs_to :time_slot,
  #   primary_key: :id,
  #   foreign_key: :time_slot_id,
  #   class_name: 'TimeSlot'

  
end
