class RenameTimeSlotInOpenSlot < ActiveRecord::Migration[5.2]
  def change
    rename_column :open_slots, :time_slot, :time_slot_id
  end
end
