# == Schema Information
#
# Table name: lessons
#
#  id          :bigint           not null, primary key
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

class Lesson < ApplicationRecord
    validates :teacher_id, :language_id, :title, :description, :category, :price, :duration, presence: true

    belongs_to :teacher,
        primary_key: :id,
        foreign_key: :teacher_id,
        class_name: 'Teacher'

    belongs_to :language,
        primary_key: :id,
        foreign_key: :language_id,
        class_name: 'Language'
end
