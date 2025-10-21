import { randomUUID } from 'node:crypto';
import { Database } from './database.js';
import path from 'node:path';
import { buildRouterPath } from '../utils/build-route-path.js';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRouterPath('/users'),
    handler: (req, res) => {
      const users = database.select('users');

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: 'POST',
    path: buildRouterPath('/users'),
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert('users', user);

      return res.writeHead(201).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRouterPath('/users/:id'),
    handler: (res, req) => {
      res.end();
    },
  },
];
