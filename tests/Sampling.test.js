const expect = require("expect");
const RandomGenerator = require('../src/Random.js');
const Sampling = require('../src/Sampling.js');

test('Simple random sampling', () => {
    let size = 10;
    let randomList = RandomGenerator.randomIntListWithSeed(10, 10, 100, size);
    let sampleSize = RandomGenerator.randomIntWithSeed(1, 10, (size));
    let sampleList1 = Sampling.simpleRandomSample(randomList, sampleSize, 10);
    let sampleList2 = Sampling.simpleRandomSample(randomList, sampleSize, 10);

    expect(sampleList1).toHaveLength(Math.ceil(sampleSize));
    expect(sampleList1).toEqual(sampleList2);
});

test('Get z-score from confidence percent', () => {
    expect(Sampling.getZScoreFromConfidence(80)).toEqual(1.28);
    expect(Sampling.getZScoreFromConfidence(95)).toEqual(1.96);
});
