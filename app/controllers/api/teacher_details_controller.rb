class Api::TeacherDetailsController < ApplicationController

    def index
        @teacher_details = TeacherDetail.all
    end

    def show
        @teacher_detail = TeacherDetail.find(params[:id])
        render :show
    end
end
