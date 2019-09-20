# == Schema Information
#
# Table name: teachers
#
#  id              :bigint           not null, primary key
#  teacher_id      :integer          not null
#  country         :string           not null
#  about_me        :text             not null
#  title           :string           not null
#  video_url       :string
#  hourly_rate     :float
#  trial_rate      :float
#  work_experience :string
#  education       :string
#  certificates    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Teacher < ApplicationRecord
  validates :teacher_id, :country, :about_me, :title, presence: true

  belongs_to :teacher_user,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'User'

  has_many :taught_languages,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'TeacherTeach'

  has_many :spoken_languages,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'TeacherSpeak'

  has_many :languages_spoken,
    through: :spoken_languages,
    source: :language

  has_many :languages,
    through: :taught_languages,
    source: :language

  has_many :lessons,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'Lesson'
  

end
