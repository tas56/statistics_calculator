const Calculator = require('../src/Calculator');
const Statistics = require('../src/Statistics');

test('Calculator sum function', () => {
    let arr = [1,2,3,4,5];
    expect(Statistics.Mean(arr).GetResults()).toBe(3);
});