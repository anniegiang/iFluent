class Api::LessonEnrollmentsController < ApplicationController
    def create
        @lessons = LessonEnrollment.create!(lesson_enrollment_params)
        @user = @lessons.student
        render 'api/users/show'
    end

    def lesson_enrollment_params
        params.require(:lesson_enrollment).permit(:lesson_id, :student_id)
    end
end
