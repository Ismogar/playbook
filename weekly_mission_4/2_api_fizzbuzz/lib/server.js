const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { response, request } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission
    response.json(ExplorerController.getExplorersByMission(mission))
})

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission
    response.json({
        mission: request.params.mission,
        quantity: ExplorerController.getExplorersAmonutByMission(mission)
    });
})

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission
    response.json({
        mission: request.params.mission,
        explorers: ExplorerController.getExplorersUsernamesByMission(mission)
    })
})