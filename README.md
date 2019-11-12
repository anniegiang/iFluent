# iFluent
## Live: https://ifluent.herokuapp.com/

[iFluent](https://ifluent.herokuapp.com/#/) is a full-stack clone of [iTalki](https://www.italki.com/), an online platform that connects language-learning enthusiasts with teachers who teach a variety of languages. iFluent features the ability to discover teachers across different languages, as well as the ability to book lessons.

![](splash.gif)
![](search-results.gif)
![](booking.gif)

## Technologies

- Backend: Ruby on Rails, PostgreSQL
- Frontend: React, Redux
- Other: AWS

## Features
- Designed the ability to search for teachers by language by sending the language name as a query and establishing Active Record associations between teachers and languages to filter teachers based on the given language.

- Enhanced query fetch performance by prefetching data associations using Active Record’s includes method, avoiding N+1 queries for nested associations.

- Improved state organization by storing core data types in objects and making the IDs as keys and data as values, achieving constant lookup time and normalizing the Redux store.

- Implemented secure user authentication by storing hashed passwords generated using Bcrypt and storing session tokens using Rail’s Session to maintain user-specific state to correctly identify users upon HTTP requests.

- Leveraged the React-Slick library to build a photos carousel that allows users to click through slides using navigation arrows.

## Code sneak peak

### Search languages by teacher
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

### Create a booking
```
controllers/api/bookings_controller

def create
  @booking = Booking.new(booking_params)
    if @booking.save
       render :show 
    else
       render json: @booking.errors.full_messages, status: 422
    end
end

def booking_params
    params.require(:booking).permit(:student_id, :teacher_id, :start_time, :duration, :lesson_item_id)
end
```
### Booking form onClick button styling 
```
frontend/components/booking/booking_form.jsx

  handleSelectedTimeOption(id) {
    const allTimeOptions = Array.from(
      document.getElementsByClassName("time-option")
    );

    let option;
    for (let i = 0; i < allTimeOptions.length; i++) {
      let option = allTimeOptions[i];
      let optionId = parseInt(allTimeOptions[i].id);
      if (option.selected || optionId === id) {
        option.selected = !option.selected;
        option.classList.toggle("selected");
      }
    }
  }
```
