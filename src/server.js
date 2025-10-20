import http from 'node:http';
import { json } from '../middlewares/json.js';
import { routes } from '../middlewares/routes.js';

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  console.log(route);

  return res.writeHead(404).end();
});

server.listen(3333, () => {
  console.log('Servidor funcional');
});

// localhost: 3333;
// -Dentro desse req eu consigo obter todas as informações da requisição que chega no servidor;
// -res vai ser utilizado pra devolver uma resposta pra quem está chamando;
