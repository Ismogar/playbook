const FizzbuzzService = require("../../lib/services/FizzbuzzService")

describe("Test for Fizzbuzz", () => {
    test("Validate that the trick attribute is being added", () => {
        const explorer = { name: "Explorer1", score: 1 }
        const result = FizzbuzzService.applyValidationInExplorer(explorer)

        expect(result.trick).toBe(1)
    })
})