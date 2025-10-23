export function buildRouterPath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)'); //prettier-ignore

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
