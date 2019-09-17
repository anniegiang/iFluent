class CreateTeacherSpeaks < ActiveRecord::Migration[5.2]
  def change
    create_table :teacher_speaks do |t|
      t.integer :teacher_id, null: false
      t.integer :language_id, null: false
      t.integer :fluency, null: false
      t.timestamps
    end
  end
end
