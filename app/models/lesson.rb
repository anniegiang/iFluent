# == Schema Information
#
# Table name: lessons
#
#  id             :bigint           not null, primary key
#  teacher_id     :integer          not null
#  language_name  :integer          not null
#  title          :string           not null
#  description    :text             not null
#  category       :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lessons_taught :integer
#

class Lesson < ApplicationRecord
    validates :teacher_id, :language_name, :title, :description, :category, presence :true

    belongs_to :teacher,
      primary_key: :id,
      foreign_key: :teacher_id,
      class_name: 'Teacher'

    has_many :lesson_enrollments
      primary_key: :id,
      foreign_key: :lesson_id,
      class_name: 'LessonEnrollment'

    has_many :students,
      through: :lesson_enrollments,
      source: :student

end
