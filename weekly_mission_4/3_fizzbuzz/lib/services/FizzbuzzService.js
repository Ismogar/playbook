class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        switch (explorer.score) {
            case '1':
                explorer.trick = 1
                break
            case '3':
                explorer.trick = "FIZZ"
                break
            case '5':
                explorer.trick = "BUZZ"
                break
            case '15':
                explorer.trick = "FIZZBUZZ"
                break
            default:
                explorer.trick = "Unidentified Score"
                break
        }

        return explorer
    }

    static applyValidationInNumber(number) {
        switch (number) {
            case '1':
                return 1
            case '3':
                return "FIZZ"
            case '5':
                return "BUZZ"
            case '15':
                return "FIZZBUZZ"
            default:
                return "Unidentified Score"
        }

    }
}

module.exports = FizzbuzzService