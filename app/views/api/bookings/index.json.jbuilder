@sorted_bookings = @bookings.order('start_time ASC')
@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'booking', booking: booking
  end
end

