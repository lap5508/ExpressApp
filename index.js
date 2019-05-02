const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.get('/friends', (req, res) => {
   res.send('Luke and Dustin');
});

app.listen(3000, () => {
   console.log('listening on 3000!');
});