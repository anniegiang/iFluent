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

require 'test_helper'

class LessonEnrollmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
