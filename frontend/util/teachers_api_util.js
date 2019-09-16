export const fetchAllTeachers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/teachers'
    })
}

export const fetchTeacher = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/teachers/${id}`
    })
}
