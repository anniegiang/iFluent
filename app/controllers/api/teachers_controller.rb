class Api::TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
    end

    def show
        @teacher = TeacherDetail.find(params[:id])
        render :show
    end
end
