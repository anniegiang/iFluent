export const fetchAllTeacherDetails = ()=> (
    $.ajax({
        method: 'GET',
        url: '/api/teacher_details/'
    })
);

export const fetchTeacherDetail = id => (
    $.ajax({
        method: 'GET',
        url: `/api/teacher_details/${id}`
    })
);