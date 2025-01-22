const WebSocket = require('ws');

// Créer un serveur WebSocket sur le port 8080
const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log('Serveur WebSocket en cours d\'exécution sur ws://localhost:8080');
});

// Lorsqu'un client se connecte
wss.on('connection', (ws) => {
    console.log('Un client est connecté.');

    // Lorsque le serveur reçoit un message du client
    ws.on('message', (message) => {
        console.log(`Message reçu : ${message}`);

        // Répondre au client
        ws.send(`Commentaire reçu : ${message}`);
    });

    // Gérer la fermeture de la connexion
    ws.on('close', () => {
        console.log('Connexion fermée.');
    });

    // Gérer les erreurs
    ws.on('error', (error) => {
        console.error(`Erreur WebSocket : ${error.message}`);
    });
});

