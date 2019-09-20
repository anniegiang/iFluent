# == Schema Information
#
# Table name: teacher_speaks
#
#  id          :bigint           not null, primary key
#  teacher_id  :integer          not null
#  language_id :integer          not null
#  fluency     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class TeacherSpeak < ApplicationRecord
    validates :teacher_id, :language_id, :fluency, presence: true

    belongs_to :teacher,
        primary_key: :id,
        foreign_key: :teacher_id,
        class_name: 'Teacher'

    belongs_to :language,
        primary_key: :id,
        foreign_key: :language_id,
        class_name: 'Language'

    

end
