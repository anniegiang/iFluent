class RemovePictureUrlInTeacherInfo < ActiveRecord::Migration[5.2]
  def change
    remove_column :teacher_info, :picture_url
  end
end
