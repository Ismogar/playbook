const issue = {
    title: "titulo",
    repositoryNameAssociated: "nombre",
    status: "estatus",
    numberOfComments: 10,
    labels: "Etiqueta",
    author: "Autor",
    dateCreated: "14/04/2022",
    lastUpdated: "15/04/2022",
    getTitleAndAuthor: function () {
        return `This issues title is ${this.title} made by ${this.author}.`
    },
    getGeneralInfo: function () {
        return `${this.getTitleAndAuthor} current status is ${this.status} and last update is ${this.lastUpdated}.`
    }
}

console.log("Titulo del issue:" + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
