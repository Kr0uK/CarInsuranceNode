// Protocole
var http = require('http');

// Ca crée le serveur
var server = http.createServer(function (req, res) {
    
    // Le code HTTP + le type de données
    res.writeHead(200, {"Content-Type": "text/html"});
    
    // Ici on écrit du HTML
    res.write();
    
    
    // On ferme la page
    res.end();
});

server.listen(80);

