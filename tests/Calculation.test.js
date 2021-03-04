const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

test('Test of Calculation instantiation', () => {
    let calculation = new Calculation(Sum,1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(Sum);
});
test('Test results for sum function', () => {
    expect(new Calculation(Sum,1,2).GetResults()).toBe(3);
});
test('Test results for difference function', () => {
    expect(new Calculation(Difference,1,2).GetResults()).toBe(-1);
});
test('Test results for product function', () => {
    expect(new Calculation(Product,1,2).GetResults()).toBe(2);
});
test('Test results for difference function', () => {
    expect(new Calculation(Quotient,2,1).GetResults()).toBe(2);
});
test('Test results for exponentiation function', () => {
    expect(new Calculation(Exponentiation,2,2).GetResults()).toBe(4);
});
test('Test results for root function', () => {
    expect(new Calculation(Root,9,2).GetResults()).toBe(3);
});
