# == Schema Information
#
# Table name: bookings
#
#  id             :bigint           not null, primary key
#  teacher_id     :integer          not null
#  student_id     :integer          not null
#  lesson_item_id :integer          not null
#  time_slot_id   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
