class AddProfileAboutMe < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_about_me, :text
  end
end
