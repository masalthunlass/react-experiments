import {Game} from "./domain/Game.js";
import fastify, {FastifyError, FastifyReply, FastifyRequest} from 'fastify'
import fastifyCors from 'fastify-cors';
import {GameController} from "./api/GameController.js";

const port = 5000;
const app = fastify({ logger: true });

app.register(fastifyCors, {
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"]
});

type GameCreationRequest = FastifyRequest<{
    Body: { id: string, firstPlayer: string };
}>

app.post('/api/games', async (request: GameCreationRequest, response: FastifyReply) => {
    GameController.createGame(request.body.id, request.body.firstPlayer).then((games: Game[]) => {
        response.status(200).send(games);
    }).catch((error: FastifyError) => {
        response.status(500).send(error);
    });
});


type GameRequest = FastifyRequest<{
    Params: { id: string };
}>
app.get('/api/games/:id', async (request: GameRequest, response: FastifyReply) => {
    GameController.getGame(request.params.id).then((game: Game) => {
        response.status(200).send(game);
    }).catch((error: FastifyError) => {
        response.status(500).send(error);
    });
});


app.listen(port, (error, address) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})


