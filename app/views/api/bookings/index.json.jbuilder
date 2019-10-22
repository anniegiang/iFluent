@sorted_bookings = @bookings.sort_by { |b| b[:start_time] }
json.array! @sorted_bookings do |booking|
    json.partial! 'booking', booking: booking
end

# correct top-level keys but unsorted
# @sorted_bookings = @bookings.order('start_time ASC')
# @sorted_bookings.each do |booking|
#   json.set! booking.id do
#     json.partial! 'booking', booking: booking
#   end
# end

