const Operation = require('../src/Operations/MathOperations');

test('Math operations sum function', () => {
    expect(Operation.sum(1,2)).toBe(3);
});
test('Math operations difference function', () => {
    expect(Operation.difference(1,2)).toBe(-1);
});
test('Math operations product function', () => {
    expect(Operation.product(1,2)).toBe(2);
});
test('Math operations quotient function', () => {
    expect(Operation.quotient(1,2)).toBe(.5);
});
test('Math operations exponential function', () => {
    expect(Operation.power(2,2)).toBe(4);
});
test('Math operations root function', () => {
    expect(Operation.root(4,2)).toBe(2);
});