class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const amountOfExplorersByMission = explorers.reduce((counter, explorer) => {
            if (explorer.mission == mission) {
                return counter + 1
            }

            return counter
        }, 0)

        return amountOfExplorersByMission
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersUsernamesByMission = explorers.map((explorer) => {
            if (explorer.mission == mission) {
                return explorer.githubUsername
            }
        })

        return explorersUsernamesByMission
    }
}

module.exports = ExplorerService