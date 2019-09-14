export const fetchAllTeacherDetails = ()=> (
    $.ajax({
        method: 'GET',
        url: '/api/teacher_details/'
    })
);

export const fetchTeacherDetail = id => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/teacher_details/${id}`
    })
}