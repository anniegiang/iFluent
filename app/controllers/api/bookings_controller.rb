class Api::BookingsController < ApplicationController

  def index # teacher bookings
    @teacher = Teacher.find_by(id: params[:teacher_id])
    if @teacher
      @bookings = @teacher.time_slots.where(available: false)
    else
      render json: ["No teachers found"], status: 422
    end
  end

  def show 
    @user = User.find(params[:id]) # student id
    if @user 
      @bookings = @user.bookings
    else
      render json: ["No teachers found"], status: 422
    end
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
