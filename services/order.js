const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const data = [
  {
    id: 1,
    user_id: 1,
    product_id: 1,
  },
  {
    id: 2,
    user_id: 2,
    product_id: 2,
  },
  {
    id: 3,
    user_id: 3,
    product_id: 3,
  },
];

app.get('/orders', (req, res) => {
  console.log('/orders');
  res.status(200).json(data).end();
});

server.listen(3003, () => {
  console.log('order service is listening on http://localhost:3003');
});
