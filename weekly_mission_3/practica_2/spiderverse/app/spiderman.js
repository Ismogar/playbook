class Spiderman {
    constructor(nombre, edad, actor, peliculas, estudio) {
        this.nombre = nombre
        this.edad = edad
        this.actor = actor
        this.peliculas = peliculas
        this.estudio = estudio
    }

    getInfo() {
        return `Hey, I'm ${this.actor} from ${this.estudio} studio`
    }
}

// Esta línea nos permite exportar nuestra clase
module.exports = Spiderman