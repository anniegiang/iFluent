class RenameTeacherInfoToTeachersInfo < ActiveRecord::Migration[5.2]
  def change
    rename_table :teacher_info, :teachers_info
  end
end
