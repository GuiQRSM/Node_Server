export function buildRoutrPath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  console.log(path.matchAll(routeParametersRegex));
}
