@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :start_time, :end_time
  end
end