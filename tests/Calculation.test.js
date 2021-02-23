const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

test('Test of Calculation instantiation', () => {
    let calculation = new Calculation(1,2,Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(Sum);
});
test('Test results for sum function', () => {
    expect(new Calculation(1,2,Sum).GetResults()).toBe(3);
});
test('Test results for difference function', () => {
    expect(new Calculation(1,2,Difference).GetResults()).toBe(-1);
});
test('Test results for product function', () => {
    expect(new Calculation(1,2,Product).GetResults()).toBe(2);
});
test('Test results for difference function', () => {
    expect(new Calculation(2,1,Quotient).GetResults()).toBe(2);
});
test('Test results for exponentiation function', () => {
    expect(new Calculation(2,2,Exponentiation).GetResults()).toBe(4);
});
test('Test results for root function', () => {
    expect(new Calculation(9,2,Root).GetResults()).toBe(3);
});
