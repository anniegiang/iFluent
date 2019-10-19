class Api::TimeSlotsController < ApplicationController

  def index # show all time slots given teacher_id
    @teacher = Teacher.find(params[:teacher_id])
    @time_slots = @teacher.time_slots
  end

end
