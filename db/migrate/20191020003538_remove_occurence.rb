class RemoveOccurence < ActiveRecord::Migration[5.2]
  def change
    remove_column :time_slots, :occurence
  end
end
