export const fetchAllLessonsByTeacher = teacherId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/lessons?teacherId=${teacherId}`
        })
    )
}

export const fetchLesson = lessonId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/lessons/${lessonId}`
        })
    )
}