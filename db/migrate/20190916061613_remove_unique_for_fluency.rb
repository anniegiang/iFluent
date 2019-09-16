class RemoveUniqueForFluency < ActiveRecord::Migration[5.2]
  def change
    remove_index :teacher_teaches, :fluency
  end
end
