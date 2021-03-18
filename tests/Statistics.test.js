const Statistics = require('../src/Statistics');
const expect = require("expect");
const RandomGenerator = require('../src/Operations/Statistics/Random.js');
const Sampling = require('../src/Operations/Statistics/Sampling.js');
const Descriptive = require("../src/Operations/Statistics/Descriptive");

// TESTS FOR DESCRIPTIVE

test('Statistics mean function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.mean(arr).getResults()).toBe(3);
});
test('Statistics median function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.mean(arr).getResults()).toBe(3);
});
test('Statistics mode function', () => {
    let arr = [1,1,1,2,3,4,5];
    expect(Statistics.mode(arr).getResults()).toBe(1);
});
test('Statistics variance function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.variance(arr).getResults()).toBe(2);
});
test('Statistics standard deviation function', () => {
    let arr = [1,2,3,4,5];
    expect(Math.round(Statistics.standardDeviation(arr).getResults() * 10)/10).toBe(1.6);
});
// test('Statistics skewness function', () => {
//     let arr = [1,2,3,4,5];
//     expect(Math.round(Statistics.standardDeviation(arr).getResults() * 10)/10).toBe(1.6);
// });
test('Statistics quartiles function', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    expect(Statistics.quartiles(arr).getResults()).toBe("Lower Quartile: 4.75 | Middle Quartile: 7.5 | Upper Quartile: 12.25");
});
test('Statistics mean absolute deviation function', () => {
    let arr = [10, 15, 15, 17, 18, 21];
    expect(Statistics.meanAbsoluteDeviation(arr).getResults()).toBe(2.6666666666666665);
});
/*test('Statistics sample correlation function', () => {
    let x = [1,2,4,5,8];
    let y = [5,20,40,80,100];
    expect(Descriptive.sampleCorrelation((x),(y))).toBe(0.96841339661827);
});*/
/*test('Statistics population correlation function', () => {
    let x = [1,2,4,5,8];
    let y = [5,20,40,80,100];
    expect(Descriptive.populationCorrelation((x),(y))).toBe(0.96841339661827);
});*/


test('Statistics z-score function', () => {
    expect(Statistics.zScore(5,3,2).getResults()).toBe(1);
});

// TESTS FOR SAMPLING
seed = 10;

test('Statistics Simple random sampling', () => {
    let size = 10;
    let randomList = RandomGenerator.randomIntListWithSeed(10, 10, 100, size);
    let sampleSize = RandomGenerator.randomIntWithSeed(1, 10, (size));
    let sampleList1 = Statistics.simpleRandomSample(randomList, sampleSize, 10).getResults();
    let sampleList2 = Statistics.simpleRandomSample(randomList, sampleSize, 10).getResults();

    expect(sampleList1).toHaveLength(Math.ceil(sampleSize));
    expect(sampleList1).toEqual(sampleList2);
});

test('Statistics Get z-score from confidence percent', () => {
    expect(Statistics.getZScoreFromConfidence(80).getResults()).toEqual(1.28);
    expect(Statistics.getZScoreFromConfidence(95).getResults()).toEqual(1.96);
});

test('Statistics Find margin of error', () => {
    let size = 10;
    let sampleArr = RandomGenerator.randomIntListWithSeed(seed, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.randomIntWithSeed(seed, 50, 95) /  5) * 5;
    let marginOfError = Statistics.marginOfError(sampleArr, confidence);

    expect(marginOfError.getResults()).toBeGreaterThan(0);
});

test('Statistics Confidence interval', () => {
    let size = 10;
    let sampleList = RandomGenerator.randomIntListWithSeed(seed, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.randomIntWithSeed(seed, 50, 95) /  5) * 5;
    let confidenceInterval = Statistics.findConfidenceInterval(sampleList, confidence).getResults();

    let mean = Descriptive.mean(sampleList);
    expect(confidenceInterval).toHaveLength(2);
    expect(confidenceInterval[0]).toBeLessThan(mean);
    expect(confidenceInterval[1]).toBeGreaterThan(mean);
});

test('Statistics Cochrans sample size', () => {
    expect(Statistics.cochranFormula(95,5,.5,1000).getResults()).toBe(278);
});

test('Statistics Sample size with NO standard deviation', () => {
    expect(Statistics.sampleSizeNoStdDev(95,10, 0.5).getResults()).toBeGreaterThan(0);
});

test('Statistics Sample size with standard deviation', () => {
    let size = 10;
    let sampleArr = RandomGenerator.randomIntListWithSeed(100, -100, 100, size);
    let confidence = Math.floor(RandomGenerator.randomIntWithSeed(100, 50, 95) /  5) * 5;
    let stdDev = Descriptive.standardDeviation(sampleArr);
    expect(Statistics.sampleSizeWithStdDev(confidence,10, stdDev).getResults()).toBeGreaterThan(0);
});



