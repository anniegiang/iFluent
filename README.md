# iFluent

iFluent is a full-stack clone of iTalki, an online platform that connects language-learning enthusiasts with teachers among a variety of languages. iFluent features the ability to discover teachers across different languages, as well as the ability to book lessons.

![](splash.gif)
![](search-results.gif)
![](booking.gif)

## Technologies

- Backend: Ruby on Rails, PostgreSQL
- Frontend: React, Redux

## Features
- Designed the ability to search for teachers by language by sending the language name as a query and establishing Active Record associations between teachers and languages to filter teachers based on the given language.

- Enhanced query fetch performance by prefetching data associations using Active Record’s includes method, avoiding N+1 queries for nested associations.

- Improved state organization by storing core data types in objects and making the IDs as keys and data as values, achieving constant lookup time and normalizing the Redux store.

- Implemented secure user authentication by storing hashed passwords generated using Bcrypt and storing session tokens using Rail’s Session to maintain user-specific state to correctly identify users upon HTTP requests.

- Leveraged the React-Slick library to build a photos carousel that allows users to click through slides using navigation arrows.


### Secure authentication

- Utilized Bcrypt to create password digests.
- Maintained state by generating a session token each time a client logged in and storing the token in the client's cookie.

### Search Results

- Users can search for teachers based on languages. In order to filter teachers correctly, the name of the language is stored in the params upon an ajax call to Teachers#index.

```
controllers/api/teachers_controller
def index
    @language = Language.find_by(language: params[:language]) #language name
    if @language
        @teachers = @language.taught_by_teachers
    else
        render json: ["No teachers found for this language"], status: 422
    end
end
```

