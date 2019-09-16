class Api::LanguagesController < ApplicationController

    def index
        @languages = Language.all
        render :index
    end

    def show
        @language = Language.find(params[:id])
        @teachers = Teacher.all[@language.teachers_teaching_language[0].teacher_id]
        render :show, include: [:teachers_teaching_language]
    end


end
