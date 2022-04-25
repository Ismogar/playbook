const User = require('../models/user')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        return [
            user.id,
            user.username,
            user.name,
            user.bio,
        ]
    }

    static updateUserUsername(user, newUsername) {
        user.username = newUsername
    }

    static getAllUsernames(users) {
        let usernames = []
        users.forEach(user => {
            usernames.push(user.username)
        })
        return usernames
    }
}

module.exports = UserService