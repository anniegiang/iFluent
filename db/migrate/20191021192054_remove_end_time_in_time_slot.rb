class RemoveEndTimeInTimeSlot < ActiveRecord::Migration[5.2]
  def change
    remove_column :time_slots, :end_time
    remove_column :open_slots, :available
  end
end
