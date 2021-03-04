const Calculation = require('../src/Models/Calculation');
const op = require('../src/Operations/MathOperations');

test('Test of Calculation instantiation', () => {
    let calculation = new Calculation(op.sum,{a:1,b:2});
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op.sum);
});
test('Test results for sum function', () => {
    expect(new Calculation(op.sum,{a:1,b:2}).getResults()).toBe(3);
});
test('Test results for difference function', () => {
    expect(new Calculation(op.difference,{a:1,b:2}).getResults()).toBe(-1);
});
test('Test results for product function', () => {
    expect(new Calculation(op.product,{a:1,b:2}).getResults()).toBe(2);
});
test('Test results for difference function', () => {
    expect(new Calculation(op.quotient,{a:2,b:1}).getResults()).toBe(2);
});
test('Test results for exponentiation function', () => {
    expect(new Calculation(op.power,{a:2,b:2}).getResults()).toBe(4);
});
test('Test results for root function', () => {
    expect(new Calculation(op.root,{a:9,b:2}).getResults()).toBe(3);
});
