class Api::TimeSlotsController < ApplicationController

  def index
    @teacher = Teacher.find(params[:teacher_id])
    
  end

end
