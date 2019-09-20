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

    has_many :teachers_teaching_language,
        foreign_key: :language_id,
        class_name: 'TeacherTeach'

    has_many :teachers_speaking_language,
        foreign_key: :language_id,
        class_name: 'TeacherSpeak'

    has_many :teachers,
        through: :teachers_teaching_language,
        source: :teacher

    has_many :lessons,
        primary_key: :id,
        foreign_key: :language_id,
        class_name: 'Lesson'
        
end
