# == Schema Information
#
# Table name: teachers
#
#  id          :bigint           not null, primary key
#  teacher_id  :integer          not null
#  country     :string           not null
#  about_me    :text             not null
#  title       :string           not null
#  video_url   :string
#  hourly_rate :float
#  trial_rate  :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TeacherTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
