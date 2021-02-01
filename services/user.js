const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const data = [
  {
    id: 1,
    name: 'user 1',
  },
  {
    id: 2,
    name: 'user 2',
  },
  {
    id: 3,
    name: 'user 3',
  },
];

app.get('/users', (req, res) => {
  console.log('/users');
  res.status(200).json(data).end();
});

app.get('/users/:id', (req, res) => {
  console.log('/users/:id');
  const user = data.find((i) => i.id === +req.params.id);
  res.status(200).json(user).end();
});

server.listen(3001, () => {
  console.log('user service is listening on http://localhost:3001');
});
