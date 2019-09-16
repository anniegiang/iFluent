class Api::TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
    end

    def show
        if Teacher.find_by(id: params[:id])
            @teacher = Teacher.find(params[:id])
            @user = @teacher.teacher_user
            @languages_taught = Language.all[@teacher.taught_languages[0].language_id]
            @fluency = @teacher.taught_languages[0].fluency
            render :show, include: [:teacher_info, :taught_languages]
        else 
            render json: ["Teacher does not exist"], status: 422
        end
    end
end
