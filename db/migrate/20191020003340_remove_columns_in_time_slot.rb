class RemoveColumnsInTimeSlot < ActiveRecord::Migration[5.2]
  def change
    remove_column :time_slots, :teacher_id
    remove_column :time_slots, :available
    remove_column :time_slots, :schedule
  end
end
