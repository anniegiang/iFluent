class RemoveTypo < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_picure
    add_column :users, :profile_picture, :string, null: false, :default => "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/default.13c19308.svg"
  end
end
