const getQueryParams = (key: string) =>
  new URLSearchParams(window.location.search).get(key);

export default getQueryParams;
