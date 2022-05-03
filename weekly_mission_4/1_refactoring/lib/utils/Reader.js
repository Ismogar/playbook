const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readJsonFile(filePath)
        const jsonArray = JSON.parse(rawdata)

        return jsonArray
    }
}

module.exports = Reader