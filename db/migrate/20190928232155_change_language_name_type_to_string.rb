class ChangeLanguageNameTypeToString < ActiveRecord::Migration[5.2]
  def change
    change_column :lessons, :language_name, :string
  end
end
