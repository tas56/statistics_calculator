const expect = require("expect");
const RandomGenerator = require('../src/Random.js');
const Sampling = require('../src/Sampling.js');

/*
test('Simple random sampling', () => {
    let size = 10;
    let arrList = RandomGenerator.randomIntListWithSeed(10, 10, 100, size);
    let sampleSize = RandomGenerator.randomSeed(10, 1, (size - 1));
    let sampleArr1 = Sampling.simpleRandomSample(arrList, sampleSize, 10);
    let sampleArr2 = Sampling.simpleRandomSample(arrList, sampleSize, 10);

    expect(sampleArr1).toHaveLength(sampleSize);
    expect(sampleArr1).toEqual(sampleArr2);
});

 */