export const createLessonEnrollment = enrollment => {
    return ( 
        $.ajax({
            method: 'POST',
            url: '/api/lesson_enrollments',
            data: JSON.stringify(enrollment),
            dataType: "json",
            contentType: "application/json",
            error: function(data){
                console.log(data)
            }
        })
    )
}



