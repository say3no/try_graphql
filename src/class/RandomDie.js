class RandomDie {
    constructor(numSide) {
        if (typeof numSide !== 'number') {
            throw Error('RandomDie require number arg as numSide for constructor')
        }
        this.numSide = numSide
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSide)
    }

    roll({
        numRolls
    }) {
        if (typeof numRolls !== 'number') {
            throw Error('RandomDie.numRolls() require number { numRolls: number }')
        }
        var output = []
        for (var i = 0; i < numRolls; i++) {
            output.push(this.rollOnce())
        }
        return output
    }
}

export default RandomDie