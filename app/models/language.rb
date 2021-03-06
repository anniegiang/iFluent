# == Schema Information
#
# Table name: languages
#
#  id         :bigint           not null, primary key
#  language   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Language < ApplicationRecord
  validates :language, presence: true
  
  has_many :teachers_speak,
    primary_key: :id,
    foreign_key: :language_id,
    class_name: 'TeacherSpeak'

  has_many :teachers_teach,
    primary_key: :id,
    foreign_key: :language_id,
    class_name: 'TeacherTeach'

  has_many :spoken_by_teachers,
    through: :teachers_speak,
    source: :teacher

  has_many :taught_by_teachers,
    through: :teachers_teach,
    source: :teacher
end
