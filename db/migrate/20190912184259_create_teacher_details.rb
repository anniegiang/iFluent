class CreateTeacherDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :teacher_details do |t|
      t.integer :teacher_id, null: false
      t.string :country, null: false
      t.text :about_me, null: false
      t.string :title, null: false
      t.string :video_url
      t.string :picture_url
      t.float :hourly_rate
      t.float :trial_rate
      t.string :work_experience
      t.string :education
      t.string :certificates
      t.timestamps
    end
    add_index :teacher_details, :teacher_id
  end
end
