@sorted_open_time_slots = @teacher.open_time_slots.order('start_time ASC')
@sorted_open_slots = @teacher.open_slots.order('time_slot_id ASC')

# gives back sorted start_times, but the top-level keys should be ids of open_slot and not time_slot
@sorted_open_time_slots.each_with_index do |time_slot, idx|
  json.set! time_slot.id do
    json.id @sorted_open_slots[idx].id
    json.partial! 'api/time_slots/time_slot', time_slot: time_slot # json.extract! time_slot, :start_time
  end
end

# json.array! @sorted_open_time_slots.each_with_index do |time_slot|
#   json.set! booking.id do
#     json.partial! 'api/time_slots/time_slot', time_slot: time_slot
#   end
# end


# within each open_slot.id loop the start_time is the same last time_slot from @sorted_open_time_slots 
# but at least the top-level keys are ids of open_slot
# @sorted_open_slots.each do |open_slot|
#   @sorted_open_time_slots.each do |time_slot|
#     json.set! open_slot.id do
#       json.id open_slot.id
#       json.partial! 'api/time_slots/time_slot', time_slot: time_slot # json.extract! time_slot, :start_time
#     end
#   end
# end



# @sorted_open_slots.each_with_index do |open_slot, idx|
#   json.set! open_slot.id do
#     json.id open_slot.id
#     json.timeSlotId @sorted_open_time_slots[idx].id
#     json.startTime @sorted_open_time_slots[idx].start_time
#   end
# end
