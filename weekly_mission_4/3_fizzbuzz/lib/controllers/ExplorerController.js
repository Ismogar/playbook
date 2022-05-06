const FizzbuzzService = require("../services/FizzbuzzService.js")
const ExplorerService = require("../services/ExplorerService.js")
const Reader = require("../utils/Reader.js")

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(`${process.env.PWD}/explorers.json`)
        return ExplorerService.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile(`${process.env.PWD}/explorers.json`)
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission)
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile(`${process.env.PWD}/explorers.json`)
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission)
    }

    static getScoreTrick(score) {
        return FizzbuzzService.applyValidationInNumber(score)
    }
}

module.exports = ExplorerController