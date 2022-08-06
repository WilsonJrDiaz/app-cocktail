const updateQueryParams = (queryString: string) => {
  const newURL =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?' +
    queryString;
  window.history.pushState({ path: newURL }, '', newURL);
};

export default updateQueryParams;
