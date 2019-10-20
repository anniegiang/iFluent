@teacher.open_slots.each do |open_slot|
  json.set! open_slot.id do

    @teacher.open_time_slots.each do |time_slot|
      if time_slot.id == open_slot.time_slot.id
          json.id open_slot.id
          json.timeSlotId time_slot.id
          # json.available open_slot.available
          json.extract! time_slot, :start_time, :end_time
      end
    end

  end
end