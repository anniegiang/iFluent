class Api::OpenSlotsController < ApplicationController
  def index # show all open time slots given teacher_id
    @teacher = Teacher.find(params[:teacher_id])
    @time_slots = @teacher.open_time_slots
  end
end
