class ChangeLanguageNameType < ActiveRecord::Migration[5.2]
  def change
    change_column :lessons, :language_name, :text
  end
end
