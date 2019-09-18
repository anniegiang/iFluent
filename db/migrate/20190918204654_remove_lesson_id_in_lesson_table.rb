class RemoveLessonIdInLessonTable < ActiveRecord::Migration[5.2]
  def change
      remove_column :lessons, :lesson_id
  end
end
