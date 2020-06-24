const express = require('express')
const app = express();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });

app.listen(8000, () => {
    console.log('listening on  *:8000')
})