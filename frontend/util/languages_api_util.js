export const fetchAllLanguages = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/languages'
    })
};

export const fetchTeachersByLanguage = languageId => {
    return $.ajax({
        method: 'GET',
        url: `/api/languages/${languageId}`
    })
}