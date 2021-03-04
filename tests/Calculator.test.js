const Calculator = require('../src/Calculator');

test('Calculator sum function', () => {
    expect(Calculator.sum(1,2).getResults()).toBe(3);
});
test('Calculator difference function', () => {
    expect(Calculator.difference(1,2).getResults()).toBe(-1);
});
test('Calculator product function', () => {
    expect(Calculator.product(1,2).getResults()).toBe(2);
});
test('Calculator quotient function', () => {
    expect(Calculator.quotient(1,2).getResults()).toBe(.5);
});
test('Calculator exponential function', () => {
    expect(Calculator.exponentiation(2,2).getResults()).toBe(4);
});
test('Calculator root function', () => {
    expect(Calculator.root(4,2).getResults()).toBe(2);
});

test('Calculator adding to calculations', () => {
    Calculator.calculations = [];
    Calculator.addCalculation(1);
    Calculator.product(1,2);
    Calculator.exponentiation(1,2);
    Calculator.difference(1,2);
    expect(Calculator.calculations.length).toBe(4);
});


