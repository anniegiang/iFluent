export const fetchAllTeachersByLanguage = languageName => {
    return $.ajax({
        method: 'GET',
        url: `/api/teachers?language=${languageName}`
    })
}

export const fetchTeacher = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/teachers/${id}`
    })
}
