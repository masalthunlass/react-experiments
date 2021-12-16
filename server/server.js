const gameController = require('./api/GameController')
const express = require('express'); // alternatives : fastify adoni.js
const app = express();
const port = 5000;

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/api/games', (req, res) => {
    gameController.createGame(req.body.id, req.body.firstPlayer).then((games) => {
        res.status(200).json(games);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

app.get('/api/games/:id', (req, res) => {
    gameController.getGame(req.params.id).then((game) => {
        res.status(200).json(game);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


app.listen(5000, () => {
    console.log(`Now listening on port ${port}`);
});
