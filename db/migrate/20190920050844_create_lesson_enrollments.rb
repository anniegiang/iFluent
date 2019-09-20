class CreateLessonEnrollments < ActiveRecord::Migration[5.2]
  def change
    create_table :lesson_enrollments do |t|
      t.integer :lesson_id, null: false
      t.integer :student_id, null: false
      t.timestamps
    end
    add_index :lesson_enrollments, :lesson_id
    add_index :lesson_enrollments, :student_id
  end
end
