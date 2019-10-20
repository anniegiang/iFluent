class AddOccuranceToTimeSlot < ActiveRecord::Migration[5.2]
  def change
    add_column :time_slots, :occurence, :integer, default: "biweekly", null: false
  end
end
