const express = require('express');
const app = express();
const port = process.env.port || 5000

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port,(err) => {
    if(err) return console.log(err);
    console.log('the server is listening on port 5000');
})