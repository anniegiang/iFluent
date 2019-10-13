# == Schema Information
#
# Table name: time_slots
#
#  id         :bigint           not null, primary key
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  teacher_id :integer          not null
#  available  :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TimeSlotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
