class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        switch (explorer.score) {
            case 1:
                explorer.trick = 1
                break;
            case 3:
                explorer.trick = "FIZZ"
                break;
            case 5:
                explorer.trick = "BUZZ"
                break;
            case 15:
                explorer.trick = "FIZZBUZZ"
                break;
            default:
                explorer.trick = "Unidentified Score"
        }

        return explorer
    }
}

module.exports = FizzbuzzService