// On demande le protocole
var http = require('http');
// On demande l'URL
var url = require("url");

// On requiert le module pour manipuler des fichiers
var fs = require("fs");
var head, body;

head = fs.readFile('pages/head.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
   head = data.toString();
});

body = fs.readFile('pages/index.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    body = data.toString();
});

// Ca crée le serveur
var server = http.createServer(function (req, res) {  
    // On récupère l'URL
    var page = url.parse(req.url).pathname;

    // Le code HTTP + le type de données
    res.writeHead(200, {"Content-Type": "text/html"});
    // Ici on écrit du HTML
    res.write(head);
    res.write(body);


    // On ferme la page
    res.end();
});

// Le port sur lequel on écoute
server.listen(80);

