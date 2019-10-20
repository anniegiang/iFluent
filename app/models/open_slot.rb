# == Schema Information
#
# Table name: open_slots
#
#  id           :bigint           not null, primary key
#  time_slot_id :integer          not null
#  teacher_id   :integer          not null
#  available    :boolean          default(TRUE)
#

class OpenSlot < ApplicationRecord
  validates :teacher_id, :time_slot_id, presence: true
  validates_uniqueness_of :time_slot_id, scope: :teacher_id

  belongs_to :teacher,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: "Teacher"

  belongs_to :time_slot,
    primary_key: :id,
    foreign_key: :time_slot_id,
    class_name: "TimeSlot"


end
