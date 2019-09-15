class RenameTeachersInfoToTeachers < ActiveRecord::Migration[5.2]
  def change
    rename_table :teachers_info, :teachers
  end
end
