@sorted_bookings = @bookings.order('start_time ASC')
currentTime = Time.new
json.array! @sorted_bookings do |booking|
    if booking.start_time >= currentTime
      json.partial! 'booking', booking: booking
    end
end

# correct top-level keys but unsorted
# @sorted_bookings = @bookings.order('start_time ASC')
# @sorted_bookings.each do |booking|
#   json.set! booking.id do
#     json.partial! 'booking', booking: booking
#   end
# end

