@teacher.time_slots.each do |time_slot|
  json.set! time_slot.id do
    json.extract! time_slot, :start_time, :end_time, :available
  end
end