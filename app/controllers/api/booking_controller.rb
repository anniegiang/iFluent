class Api::BookingController < ApplicationController

  def index
    if Teacher.find_by(teacher_id: params[:teacher_id])
            @teacher = Teacher.find(params[:teacher_id])
            @bookings = @teacher.time_slots.where(available: false)
        else
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
			render :show 
		else
			render json: @booking.errors.full_messages, status: 422
		end
  end

  def booking_params
    params.require(:booking).permit(:student_id, :teacher_id, :time_slot_id, :lesson_item_id)
  end
end
