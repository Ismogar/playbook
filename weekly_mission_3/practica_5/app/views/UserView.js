const UserService = require("../../../practica_4/app/services/UserService")

class UserView {
    static createUser(payload) {
        if (payload) {
            const hasNull = Object.values(payload).some((attribute) => {
                return attribute === null || attribute === ''
            })
            const hasUndefined = typeof payload.username === 'undefined' || typeof payload.name === 'undefined' || typeof payload.id === 'undefined'

            if (!hasNull && !hasUndefined) {
                return UserService.create(payload.id, payload.username, payload.name)

            } else {
                return {
                    error: "necesitan tener un valor valido",
                }
            }
        }
        else {
            return {
                error: "payload no existe",
            }
        }
    }
}

module.exports = UserView