export const fetchAllLanguages = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/languages'
    })
};