class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.integer :teacher_id, null: false
      t.integer :lesson_id, null: false
      t.integer :language_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.float :price, null: false
      t.integer :duration, null: false
      t.timestamps
    end
    add_index :lessons, :lesson_id
  end
end
