const UserService = require("../../app/services/UserService")

describe("Test for UserService", () => {
    test("1. Create anew user using the UserService", () => {
        const user = UserService.create(1, "carlo", "Carlos")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlo")
        expect(user.name).toBe("Carlos")
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "carlo", "Carlos")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlo")
        expect(userInfoInList[2]).toBe("Carlos")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "carlo", "Carlos")
        UserService.updateUserUsername(user, "carlog")
        expect(user.username).toBe("carlog")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "carlo1", "Carlos1")
        const user2 = UserService.create(2, "carlo2", "Carlos2")
        const user3 = UserService.create(3, "carlo3", "Carlos3")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("carlo1")
        expect(usernames).toContain("carlo2")
        expect(usernames).toContain("carlo3")
    })
})