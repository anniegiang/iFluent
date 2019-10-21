@sorted_open_time_slots = @teacher.open_time_slots.order('start_time ASC')

@teacher.open_slots.each do |open_slot|
  json.set! open_slot.id do
    @sorted_open_time_slots.each do |time_slot|
      if time_slot.id == open_slot.time_slot.id
          json.id open_slot.id
          json.timeSlotId time_slot.id
          json.startTime time_slot.start_time
      end
    end
  end
end


