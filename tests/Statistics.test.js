const Calculator = require('../src/Calculator');
const Statistics = require('../src/Statistics');

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
test('Statistics skewness function', () => {
    let arr = [1,2,3,4,5];
    expect(Math.round(Statistics.standardDeviation(arr).getResults() * 10)/10).toBe(1.6);
});
