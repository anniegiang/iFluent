class CreateUserLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_likes do |t|
      t.integer :teacher_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :user_likes, :teacher_id
    add_index :user_likes, :user_id
  end
end
