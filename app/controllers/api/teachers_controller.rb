class Api::TeachersController < ApplicationController

    def index
        @language = Language.find_by(language: params[:language]) #language name
        @teachers = @language.teachers
    end

    def show
        if Teacher.find_by(id: params[:id])
            @teacher = Teacher.find(params[:id])
            render :show
        else 
            render json: ["Teacher does not exist"], status: 422
        end
    end
end
