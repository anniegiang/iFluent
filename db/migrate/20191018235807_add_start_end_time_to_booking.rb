class AddStartEndTimeToBooking < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :start_time, :datetime
    add_column :bookings, :end_time, :datetime
  end
end
