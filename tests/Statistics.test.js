const Calculator = require('../src/Calculator');
const Statistics = require('../src/Statistics');

test('Statistics mean function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.Mean(arr).GetResults()).toBe(3);
});
test('Statistics median function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.Mean(arr).GetResults()).toBe(3);
});
test('Statistics mode function', () => {
    let arr = [1,1,1,2,3,4,5];
    expect(Statistics.Mode(arr).GetResults()).toBe(1);
});
test('Statistics variance function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.Variance(arr).GetResults()).toBe(2.5);
});