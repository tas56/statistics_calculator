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

test('Generate a list of N random numbers with a seed and between a range of numbers - Int', () => {
    let size = 10;
    let list1 = RandomGenerator.randomIntListWithSeed(100, 10, 100, size);
    let list2 = RandomGenerator.randomIntListWithSeed(100, 10, 100, size);

    expect(list1).toHaveLength(10);
    expect(list1).toEqual(list2);
});

test('Generate a list of N random numbers with a seed and between a range of numbers - Decimal', () => {
    let size = 10;
    let list1 = RandomGenerator.randomDecimalListWithSeed(100, 10, 100, size);
    let list2 = RandomGenerator.randomDecimalListWithSeed(100, 10, 100, size);

    expect(list1).toHaveLength(10);
    expect(list1).toEqual(list2);
});
