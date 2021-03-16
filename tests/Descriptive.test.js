const Calculator = require('../src/Calculator');
const Descriptive = require("../src/Operations/Statistics/Descriptive");

test('Descriptive mean function', () => {
    let arr = [1,2,3,4,5];
    expect(Descriptive.mean(arr)).toBe(3);
});

test('Descriptive median function', () => {
    let arr = [1,2,3,4,5];
    expect(Descriptive.mean(arr)).toBe(3);
});

test('Descriptive mode function', () => {
    let arr = [1,1,1,2,3,4,5];
    expect(Descriptive.mode(arr)).toBe(1);
});

test('Descriptive variance function', () => {
    let arr = [1,2,3,4,5];
    expect(Descriptive.variance(arr)).toBe(2.5);
});

test('Descriptive standard deviation function', () => {
    let arr = [1,2,3,4,5];
    expect(Math.round(Descriptive.standardDeviation(arr) * 10)/10).toBe(1.6);
});

// test('Statistics skewness function', () => {
//     let arr = [1,2,3,4,5];
//     expect(Math.round(Statistics.standardDeviation(arr).getResults() * 10)/10).toBe(1.6);
// });

test('Descriptive quartiles function', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    expect(Descriptive.quartiles(arr)).toBe("Lower Quartile: 4.75 | Middle Quartile: 7.5 | Upper Quartile: 12.25");
});

test('Descriptive mean absolute deviation function', () => {
    let arr = [10, 15, 15, 17, 18, 21];
    expect(Descriptive.meanAbsoluteDeviation(arr)).toBe(2.6666666666666665);
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


test('Descriptive z-score function', () => {
    expect(Descriptive.zScore(5,3,2)).toBe(1);
});
