class RandomDie {
    constructor(numSide) {
        this.numSide = numSide
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSide)
    }

    roll({ numRolls }) {
        var output = []
        for (var i = 0; i < numRolls; i++) {
            output.push(this.rollOnce())
        }
        return output
    }
}

export default RandomDie