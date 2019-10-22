class Api::BookingsController < ApplicationController
  
  def index # all current_user bookings
    if logged_in?
      @bookings = current_user.bookings
      # @bookings = current_user.bookings.includes(:teacher => [:user], :lesson_item => [:lesson]) # efficient queries using pre-fetched associations
    else
      render json: ["Must be logged in to view bookings"], status: 422
    end
  end

  def show 
    if logged_in?
      if current_user.bookings.where(id: params[:id])
        @booking = Booking.find(params[:id])
      else
        render json: ["No booking found"], status: 404
      end
    else
      render json: ["Must be logged in to view booking"], status: 422
      return
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
    params.require(:booking).permit(:student_id, :teacher_id, :start_time, :duration, :lesson_item_id)
  end
end
