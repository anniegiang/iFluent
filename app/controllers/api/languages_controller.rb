class Api::LanguagesController < ApplicationController

    def index
        @languages = Language.all
        render :index
    end

    def show
        @language = Language.find(params[:id])
        render :show
    end


end
