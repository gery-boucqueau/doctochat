const express = require('express')
const app = express();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(8000, () => {
    console.log('listening on  http://localhost:8000')
})