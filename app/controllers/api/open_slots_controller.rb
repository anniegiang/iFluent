class Api::OpenSlotsController < ApplicationController
  def index # all open time slots given teacher_id
    @teacher = Teacher.find(params[:teacher_id])
  end

  def show
    @open_slot = OpenSlot.find(params[:id])
  end

  def destroy
    @open_slot = OpenSlot.find(params[:id])
    @open_slot.destroy
    render :show
  end
end
