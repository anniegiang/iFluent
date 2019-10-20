# == Schema Information
#
# Table name: time_slots
#
#  id         :bigint           not null, primary key
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TimeSlot < ApplicationRecord
  validates :start_time, :end_time, presence: true
  
  has_many :open_slots,
    primary_key: :id,
    foreign_key: :time_slot_id,
    class_name: "OpenSlot"


end
