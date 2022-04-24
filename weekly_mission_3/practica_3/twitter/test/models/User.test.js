const User = require("../../app/models/user")

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "carlo", "carlo", "bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("carlo")
        expect(user.name).toBe("carlo")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {
        const user = new User(1, "carlo", "carlo", "bio")
        expect(user.getUsername).toBe("carlo")
        expect(user.getBio).toBe("bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('Add setters', () => {
        const user = new User(1, "carlo", "carlo", "bio")
        user.setUsername = "gilmar"
        expect(user.username).toBe("gilmar")

        user.setBio = "newbio"
        expect(user.bio).toBe("newbio")
    })
})