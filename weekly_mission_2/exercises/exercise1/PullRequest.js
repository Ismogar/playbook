const PullRequest = {
    title: "Titulo",
    branchName: "Nombre",
    dateCreated: "dd/mm/aaaa",
    status: "estatus",
    repositoryNameAssociated: "Nombre",
    getStatus: function () {
        return this.status
    },
    getTitleAndAutor: function () {
        return `This issues title is ${this.title} made by ${this.author}.`
    },
}