const express = require('express')
        , app = express()
        , multer = require('multer');

app.use(express.static('public'));

// Instância do middleware configurada
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/');
    },
    filename: function(req, file, cb) {
        cb(null, 'form-data.json')
    }
});

const upload = multer({ storage });

// Exibição do arquivo html na rota raiz
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

// Rota GET para processamento dos dados do formulário
app.get('/getForm', function(req, res) {
    response = {
        nome: req.query.nome,
        idade: req.query.idade,
        curso: req.query.curso,
        cidade: req.query.cidade
    };
    res.end(JSON.stringify(response));
});

// Rota POST para salvamento do arquivo JSON enviado
app.post('/postFile', upload.single('file'), function(req, res) {
    res.send('<h5>Envio realizado com sucesso</h5>');
})

// Estabelecimento do servidor na porta 5000
var server =  app.listen(5000, function() {
    var port = server.address().port;
    console.log("App na porta", port);
});