const expect = require("expect");
const RandomGenerator = require('../src/Random.js');

test('generate random integer number', () => {
    let min = 1;
    let max = 10;
    let randomNumber = RandomGenerator.randomIntNoSeed(min,max);

    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(11);
});

test('generate random decimal number', () => {
    let min = 1;
    let max = 10;
    let randomNumber = RandomGenerator.randomDecimalNoSeed(min,max);

    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(11);
});

test('generate random int with seed', () => {
    let min = 1;
    let max = 10;
    let seed = 5;
    let randomNumber = RandomGenerator.randomIntWithSeed(min,max, seed);

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

test('Select random item from list', () => {
    let size = 10;
    let list = RandomGenerator.randomIntListWithSeed(100, 10, 100, size);
    let val = RandomGenerator.selectRandomItem(list);

    expect(list).toContain(val);
});

test('Select 3 items from a list without a seed', () => {
    let size = 10;
    let randomList = RandomGenerator.randomIntListWithSeed(100, 10, 100, size);
    let resultList = RandomGenerator.selectNItems(randomList, 3);

    expect(resultList).toHaveLength(3);
});

test('Select 3 items from a list with a seed', () => {
    let size = 10;
    let randomList = RandomGenerator.randomIntListWithSeed(100, 10, 100, size);
    let resultList = RandomGenerator.selectNItemsWithASeed(100, randomList, 3);

    expect(resultList).toHaveLength(3);
});


