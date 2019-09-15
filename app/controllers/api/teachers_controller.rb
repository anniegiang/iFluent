class Api::TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
    end

    def show
        if Teacher.find_by(id: params[:id])
            @teacher = Teacher.find(params[:id])
            @user = @teacher.teacher_user
            render :show, include: [:teacher_info]
        else 
            render json: ["Teacher does not exist"], status: 422
        end
    end
end
