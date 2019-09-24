class CreateLessonItems < ActiveRecord::Migration[5.2]
  def change
    create_table :lesson_items do |t|
      t.integer :lesson_id, null: false
      t.integer :duration, null: false
      t.float :price, null: false
    end
  end
end
