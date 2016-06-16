var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {  
	res.render('introducao.html');
});

app.get('/introducao', function(req, res) {  
	res.render('introducao.html');
});

app.get('/tarefas', function(req, res) {  
	res.render('tarefas.html');
});

app.get('/processo', function(req, res) {  
	res.render('processo.html');
});

app.get('/avaliacao', function(req, res) {  
	res.render('avaliacao.html');
});

app.get('/conclusao', function(req, res) {  
	res.render('conclusao.html');
});

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/images'));

//Servidor fica ouvindo a porta 8080.
server.listen(8080);
