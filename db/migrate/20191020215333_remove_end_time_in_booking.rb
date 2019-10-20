class RemoveEndTimeInBooking < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :end_time
    add_column :bookings, :duration, :integer
    change_column_null :bookings, :duration, false
  end
end
