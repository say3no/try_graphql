import RandomDie from '../../src/class/RandomDie'


console.log('aaaaaaaaaaaaaaaaaaaaaaaaa')
test('No Constructor test', () => {
    const no_con = new RandomDie()
    expect(no_con.numSide).toBeUndefined()
})