const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const mysql = require('mysql');

app.use(express.urlencoded({extended : true}));


const connection = mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    user : 'b7e214b16f41fe',
    password : '2ec4b087',
    database : 'heroku_0fa42acffb3e5bc'
})

connection.connect((err) => {
    if (err) throw err;
    console.log("connect!");

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/board/board.html');
});

app.listen(port, () => {
    console.log('server on');
});