const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const mysql = require('mysql');

app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


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

app.post('/add', (req, res) => {
    let boardInsert = 'insert into heroku_0fa42acffb3e5bc.content (title, content) value (?, ?)';
    let boardParams = [req.body.title, req.body.content];
    connection.query(boardInsert, boardParams, (err, result, fields) => {
        if(err) throw err;
        console.log('데이터 추가완료');
    })
    connection.query('select * from heroku_0fa42acffb3e5bc.content', (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('board_content', {data : result});
    })
});

app.listen(port, () => {
    console.log('server ons');
});