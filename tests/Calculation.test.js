const Calculation = require('../src/Models/Calculation');
const op = require('../src/Operations/MathOperations');

test('Test of Calculation instantiation', () => {
    let calculation = new Calculation(op.sum,1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op.sum);
});
test('Test results for sum function', () => {
    expect(new Calculation(op.sum,1,2).GetResults()).toBe(3);
});
test('Test results for difference function', () => {
    expect(new Calculation(op.difference,1,2).GetResults()).toBe(-1);
});
test('Test results for product function', () => {
    expect(new Calculation(op.product,1,2).GetResults()).toBe(2);
});
test('Test results for difference function', () => {
    expect(new Calculation(op.quotient,2,1).GetResults()).toBe(2);
});
test('Test results for exponentiation function', () => {
    expect(new Calculation(op.power,2,2).GetResults()).toBe(4);
});
test('Test results for root function', () => {
    expect(new Calculation(op.root,9,2).GetResults()).toBe(3);
});
