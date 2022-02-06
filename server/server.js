const gameController = require('./api/GameController')
const app = require('fastify')({logger: true})// alternatives :  adoni.js
const port = 5000;


app.register(require("fastify-cors"), {
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"]
});

app.post('/api/games', async (req, res) => {
    gameController.createGame(req.body.id, req.body.firstPlayer).then((games) => {
        res.status(200).send(games);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.get('/api/games/:id', async (req, res) => {
    gameController.getGame(req.params.id).then((game) => {
        res.status(200).send(game);
    }).catch((err) => {
        res.status(500).send(err);
    });
});


const start = async () => {
    try {
        await app.listen(port)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()


