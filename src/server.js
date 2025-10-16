import http from 'node:http';

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.setHeader('Content-type', 'aplication/json').end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333, () => {
  console.log('Servidor funcional');
});

// localhost: 3333;
// -Dentro desse req eu consigo obter todas as informações da requisição que chega no servidor;
// -res vai ser utilizado pra devolver uma resposta pra quem está chamando;
