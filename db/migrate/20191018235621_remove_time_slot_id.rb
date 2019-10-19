class RemoveTimeSlotId < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :time_slot_id
  end
end
