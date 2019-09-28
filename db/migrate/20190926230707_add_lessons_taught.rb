class AddLessonsTaught < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :lessons_taught, :integer
  end
end
