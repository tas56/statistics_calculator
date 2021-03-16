const Calculator = require('../src/Calculator');
const Statistics = require('../src/Statistics');
const Descriptive = require("../src/Operations/Statistics/Descriptive");

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
    expect(Statistics.variance(arr).getResults()).toBe(2.5);
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
// test('Statistics mean absolute deviation function', () => {
//     let arr = [10, 15, 15, 17, 18, 21];
//     expect(Statistics.meanAbsoluteDeviation(arr).getResults()).toBe(2.66667);
// });
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

/*
test('Statistics z-score function', () => {
    let x = [10, 2, 38, 23, 38, 23, 21];
    let val = 35;
    expect(Statistics.zScore((x),(val)).getResults()).toBe(0.97);
});*/

