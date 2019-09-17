class RemoveUniqueInTeacherTeach < ActiveRecord::Migration[5.2]
  def change
    remove_index :teacher_teaches, :language_id
    remove_index :teacher_teaches, :teacher_id
  end
end
