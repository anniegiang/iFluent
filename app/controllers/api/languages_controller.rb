class Api::LanguagesController < ApplicationController

    def index
        @languages = Language.all
        render :index
    end

end
