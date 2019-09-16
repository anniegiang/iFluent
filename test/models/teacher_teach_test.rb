# == Schema Information
#
# Table name: teacher_teaches
#
#  id          :bigint           not null, primary key
#  teacher_id  :integer          not null
#  language_id :integer          not null
#  fluency     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TeacherTeachTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
