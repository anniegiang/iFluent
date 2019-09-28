class RemoveDurationAndPrice < ActiveRecord::Migration[5.2]
  def change
    remove_column :lessons, :duration
    remove_column :lessons, :price
  end
end
