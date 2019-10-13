# == Schema Information
#
# Table name: lessons
#
#  id             :bigint           not null, primary key
#  teacher_id     :integer          not null
#  language_name  :string           not null
#  title          :string           not null
#  description    :text             not null
#  category       :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lessons_taught :integer
#

class Lesson < ApplicationRecord
    validates :teacher_id, :language_name, :title, :description, :category, :lessons_taught, presence: :true

    belongs_to :teacher,
      primary_key: :id,
      foreign_key: :teacher_id,
      class_name: 'Teacher'

    has_many :lesson_items,
      primary_key: :id,
      foreign_key: :lesson_id,
      class_name: 'LessonItem'

    


end
