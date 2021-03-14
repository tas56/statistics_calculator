const expect = require("expect");
const RandomGenerator = require('../src/Random.js');

test('generate random number', () => {
    let min = 1;
    let max = 10;
    let rand = new RandomGenerator(min,max);
    let randomNumber = rand.randomNoSeed(min,max);

    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(11);
});

test('generate random number with seed', () => {
    let min = 1;
    let max = 10;
    let seed = 6;
    let rand = new RandomGenerator(min,max);
    let randomNumber = rand.randomSeed(min,max, seed);

    expect(randomNumber).toBeGreaterThan(1);
    expect(randomNumber).toBeLessThan(10);
});
