class Api::UsersController < ApplicationController

	def index
		@users = User.all
		render :index
	end

	def show
		@user = User.find_by(id: params[:id])
		@lessons = @user.enrolled_lessons
		render :show
	end

	def create
		@user = User.new(user_params)
	
		if @user.save
			login!(@user)
			render :show 
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private
	def user_params
		params.require(:user).permit(:name, :email, :password, :profile_picture)
	end
end
