class Api::LessonsController < ApplicationController

    def index
        if Teacher.find_by(id: params[:teacherId])
            @teacher = Teacher.find_by(id: params[:teacherId])
            @lessons = @teacher.lessons
        else
            render json: ["No lessons found for this teacher"], status: 422
        end
    end

    def show
        if Lesson.find(params[:id])
            @lesson = Lesson.find(params[:id])
        else
            render json: ["No lessons found"], status: 422
        end
    end

end
