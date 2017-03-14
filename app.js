var express = require('express');

var todoController = require('./Controller/todoController');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./assests'));

app.listen(3000);

todoController(app);
