class CreateTimeSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :time_slots do |t|
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.integer :teacher_id, null: false
      t.boolean :available, default: true
      t.timestamps
    end
    add_index :time_slots, :teacher_id
  end

  # create_table :bookings do |t|
  #     t.integer :teacher_id, null: false
  #     t.integer :student_id, null: false
  #     t.integer :lesson_item_id, null: false
  #     t.integer :time_slot_id, null: false
  #     t.timestamps
  #   end
  #   add_index :bookings, :teacher_id
  #   add_index :bookings, :student_id
  #   add_index :bookings, :lesson_item_id
  #   add_index :bookings, :time_slot_id
end
