const Spiderman = require("../app/spiderman");

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        // const resultOfSomething = 1 + 2
        // expect(resultOfSomething).toBe(18);
        const spiderman1 = new Spiderman("spiderman1", 31, "actor1", 2, "estudio1")

        expect(spiderman1.nombre).toBe("spiderman1")
        expect(spiderman1.edad).toBe(31)
        expect(spiderman1.actor).toBe("actor1")
        expect(spiderman1.peliculas).toBe(2)
        expect(spiderman1.estudio).toBe("estudio1")
    });

    test('2) Use the methond getInfo()', () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
})