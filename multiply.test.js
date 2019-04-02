const multiply = require('./multiply');

test('multiplies 8 * 2 to equal 16', () => {
    expect(multiply(8, 2)).toBe(16);
});

test('multiplies -8 * 2 to equal -16', () => {
    expect(multiply(-8, 2)).toBe(-16);
});

test('multiplies -0 * -2 to equal 0', () => {
    expect(multiply(-0, -2)).toBe(0);
});

test('multiplies -18.5 * 74.82 to equal -1384.17', () => {
    expect(multiply(-18.5, 74.82)).toBe(-1384.17);
});

test('multiplies -0.1 * 1.0 to equal -0.1', () => {
    expect(multiply(-0.1, 1.0)).toBe(-0.1);
});