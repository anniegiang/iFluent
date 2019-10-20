class AddScheduleToTimeSlot < ActiveRecord::Migration[5.2]
  def change
    add_column :time_slots, :schedule, :text
  end
end
