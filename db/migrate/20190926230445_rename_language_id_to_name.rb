class RenameLanguageIdToName < ActiveRecord::Migration[5.2]
  def change
    rename_column :lessons, :language_id, :language_name
  end
end
