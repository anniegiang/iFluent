class DropOldBookings < ActiveRecord::Migration[5.2]
  def up
    drop_table :bookings
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
