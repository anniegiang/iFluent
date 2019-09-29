# == Schema Information
#
# Table name: lesson_enrollments
#
#  id         :bigint           not null, primary key
#  lesson_id  :integer          not null
#  student_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class LessonEnrollment < ApplicationRecord
  validates :lesson_id, :student_id, presence: :true

   belongs_to :lesson,
    primary_key: :id,
    foreign_key: :lesson_id,
    class_name: 'Lesson'

    belongs_to :student,
      primary_key: :id,
      foreign_key: :student_id,
      class_name: 'User'


end
