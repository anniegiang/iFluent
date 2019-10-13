# iFluent

iFluent is a full-stack clone of iTalki, an online platform that connects language-learning enthusiasts with teachers among a variety of languages. iFluent features the ability to discover teachers across different languages, as well as the ability to book lessons. 

## Technologies

- Backend: Ruby on Rails, PostgreSQL
- Frontend: React, Redux 

## Features

### Secure authentication 
- Utilized Bcrypt to create password digests.
- Maintained state by generating a session token each time a client logged in and storing the token in the client's cookie. 

### Search Results
- Users can search for teachers based on languages. In order to filter teachers correctly, the name of the language is stored in the params upon API call to Teachers#index. 

controllers/api/teachers_controller
def index
    if Language.find_by(language: params[:language])
        @language = Language.find_by(language: params[:language]) #language name
        @teachers = @language.taught_by_teachers
    else
        render json: ["No teachers found for this language"], status: 422
    end
end

### Teacher Profile
- Users can view lessons offered by teachers.

 





