const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

explorers.forEach(explorer => {
    // Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
    console.log(`name: ${explorer.name}`)

    // Imprime el stack de cada explorer, usa FOR EACH
    console.log("Stacks:")
    explorer.stack.forEach(element => {
        console.log(` -> ${element}`)
    });
});

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorersStacks = explorers.map(function (explorer) {
    return explorer.stack
})
console.log(explorersStacks)

// Obtén la lista de explorers que tengan en su stack "js", 
// usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorersJS = explorers.map(function (explorer) {
    if (explorer.stack.filter((element) => element.includes("js")).length != 0) {
        return explorer
    }
})
console.log(explorersJS)

// Busca el primer explorer que sea de la CDMX, usa FIND
const explorersCDMX = explorers.find(function (explorer) {
    if (explorer.city == "CDMX") return explorer
})
console.log(explorersCDMX)

// Obtén la suma de todos los exercises_completed, usa REDUCE
const total_exercises_completed = explorers.map(function (explorer) {
    return explorer.exercises_completed
}).reduce((acc, element) => acc + element, 0)
console.log(total_exercises_completed)

// Obtén la validación si al menos uno de los explorers tiene la propiedad 
// exercisesFinished en frontend como true, usa SOME
const exercisesFinished = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true) 
console.log(exercisesFinished)

// Obtén la validación si todos los explorers tienen la propiedad isFinished 
// del  como true. Usa EVERY.
const onboardingFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true) 
console.log(onboardingFinished)
