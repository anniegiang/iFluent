class Api::BookingsController < ApplicationController
  
  def index # all current_user bookings
    @user = User.find(params[:user_id])
    @bookings = @user.bookings.includes(:time_slot, :teacher => [:user], :lesson_item => [:lesson]) # efficient queries using pre-fetch associations
  end

  def show 
    @user = User.find(params[:user_id])
    if @user.bookings.where(id: params[:id])
      @booking = Booking.find(params[:id])
    else
      render json: ["No booking found"], status: 422
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
