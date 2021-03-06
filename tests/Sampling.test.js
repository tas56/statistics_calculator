const expect = require("expect");
const RandomGenerator = require('../src/Operations/Statistics/Random.js');
const Sampling = require('../src/Operations/Statistics/Sampling.js');
const Descriptive = require('../src/Operations/Statistics/Descriptive');

seed = 10;

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

test('Find margin of error', () => {
    let size = 10;
    let sampleArr = RandomGenerator.randomIntListWithSeed(seed, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.randomIntWithSeed(seed, 50, 95) /  5) * 5;
    let marginOfError = Sampling.marginOfError(sampleArr, confidence);

    expect(marginOfError).toBeGreaterThan(0);
});

test('Confidence interval', () => {
    let size = 10;
    let sampleList = RandomGenerator.randomIntListWithSeed(seed, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.randomIntWithSeed(seed, 50, 95) /  5) * 5;
    let confidenceInterval = Sampling.findConfidenceInterval(sampleList, confidence);

    let mean = Descriptive.mean(sampleList);
    expect(confidenceInterval).toHaveLength(2);
    expect(confidenceInterval[0]).toBeLessThan(mean);
    expect(confidenceInterval[1]).toBeGreaterThan(mean);
});

// test('Systematic Sampling', () => {
//     let size = 10;
//     let arrList = RandomGenerator.randomIntListWithSeed(seed, 10, 100, size);
//     let sampleSize = RandomGenerator.randomIntWithSeed(seed,1, size);
//     let sampleArr = Sampling.systematicSample(arrList, sampleSize);
//     expect(sampleArr.length).toBe(sampleSize);
// });

test('Cochrans sample size', () => {
    expect(Sampling.cochrans(95,5,.5,1000)).toBe(278);
});

test('Sample size with NO standard deviation', () => {
    expect(Sampling.sampleSizeNoStdDev(95,10, 0.5)).toBeGreaterThan(0);
});

test('Sample size with standard deviation', () => {
    let size = 10;
    let sampleArr = RandomGenerator.randomIntListWithSeed(100, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.randomIntWithSeed(100, 50, 95) /  5) * 5;
    let stdDev = Descriptive.standardDeviation(sampleArr);
    expect(Sampling.sampleSizeWithStdDev(confidence,10, stdDev)).toBeGreaterThan(0);
});
