export const fetchAllLanguages = () => {
  return $.ajax({
    method: "GET",
    url: "/api/languages"
  });
};

export const fetchLanguage = id => {
  return $.ajax({
    method: "GET",
    url: `/api/languages/${id}`
  });
};
