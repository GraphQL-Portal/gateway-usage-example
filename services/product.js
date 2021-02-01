const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const data = [
  {
    id: 1,
    name: 'product 1',
  },
  {
    id: 2,
    name: 'product 2',
  },
  {
    id: 3,
    name: 'product 3',
  },
];

app.get('/products', (req, res) => {
  console.log('/products');
  res.status(200).json(data).end();
});

app.get('/products/:id', (req, res) => {
  console.log('/products/:id');
  const product = data.find((i) => i.id === +req.params.id);
  res.status(200).json(product).end();
});

server.listen(3002, () => {
  console.log('product service is listening on http://localhost:3002');
});
