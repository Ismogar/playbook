const FizzbuzzService = require("../../../1_refactoring/lib/services/FizzbuzzService.js")
const ExplorerService = require("../../../1_refactoring/lib/services/ExplorerService.js")
const Reader = require("../../../1_refactoring/lib/utils/Reader.js")

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
}

module.exports = ExplorerController