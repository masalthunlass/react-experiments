const gameController = require('./api/GameController')

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());


app.post('/api/games', (req, res) => {
    gameController.createGame(req.body.id, req.body.firstPlayer).then((games) => {
        res.status(200).json(games);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
