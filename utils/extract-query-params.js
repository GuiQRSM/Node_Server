export function extractQueryParams(query) {
  //substr removes the first character '?'
  //split creates an array separating by '&'
  return query
    .substr(1)
    .split('&')
    .reduce((queryParams, param) => {
      const [key, value] = param.split('=');

      queryParams[key] = value;

      return queryParams;
    }, {});
}
