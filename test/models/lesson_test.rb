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

require 'test_helper'

class LessonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
