class CreateOpenSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :open_slots do |t|
      t.integer :time_slot, null: false
      t.integer :teacher_id, null: false
      t.boolean :available, :default => true
    end
    add_index :open_slots, [:time_slot, :teacher_id], unique: true
  end
end
