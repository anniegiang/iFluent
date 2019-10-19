class AddNullConstraintInBooking < ActiveRecord::Migration[5.2]
  def change
    change_column_null :bookings, :start_time, false
    change_column_null :bookings, :end_time, false
  end
end
