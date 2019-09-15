class ChangeTeacherDetailsToTeacherInfo < ActiveRecord::Migration[5.2]
  def change
    rename_table :teacher_details, :teacher_info
  end
end
