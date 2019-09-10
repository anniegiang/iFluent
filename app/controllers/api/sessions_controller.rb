class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(params[:user][:email], params[:user][:password])

		if @user
			login!(@user)
			render :show
		else
			if !User.exists?(:email => params[:user][:email])
				render json: ["User does not exist"], status: 422
			else
				render json: ["Invalid credentials"], status: 422
			end
		end
	end

	def destroy
		@user = current_user
		if @user
			logout!
			render json: {}
		else
			render json: ["No one signed in"], status: 422
		end
	end
end
