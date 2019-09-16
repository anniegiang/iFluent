class CreateTeacherTeaches < ActiveRecord::Migration[5.2]
  def change
    create_table :teacher_teaches do |t|
      t.integer :teacher_id, null: false
      t.integer :language_id, null: false
      t.integer :fluency, null: false
      t.timestamps
    end
    add_index :teacher_teaches, :teacher_id, unique: true
    add_index :teacher_teaches, :language_id, unique: true
    add_index :teacher_teaches, :fluency, unique: true
  end
end
