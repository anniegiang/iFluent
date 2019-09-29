class RemoveResumeInfo < ActiveRecord::Migration[5.2]
  def change
    remove_column :teachers, :work_experience
    remove_column :teachers, :education
    remove_column :teachers, :certificates
  end
end
