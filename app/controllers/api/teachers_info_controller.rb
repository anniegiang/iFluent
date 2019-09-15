class Api::TeachersInfoController < ApplicationController

    def index
        @teachers_info = TeacherDetail.all
    end

    def show
        @teachers_detail = TeacherDetail.find(params[:id])
        render :show
    end
end
