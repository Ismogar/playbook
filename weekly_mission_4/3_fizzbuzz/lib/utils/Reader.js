const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath)
        const jsonArray = JSON.parse(rawdata)

        return jsonArray
    }
}

module.exports = Reader