import { findPower } from './findPower';

test('should find the power of 3^3', () => {
  const x = 3;
  const n = 3;
  const expectedVal = 27;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the power of 2^2', () => {
  const x = 2;
  const n = 2;
  const expectedVal = 4;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the power of -2^2', () => {
  const x = -2;
  const n = 2;
  const expectedVal = 4;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the power of -2^3', () => {
  const x = -2;
  const n = 3;
  const expectedVal = -8;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the power of 3^80', () => {
  const x = 3;
  const n = 100;
  const expectedVal = 5.153775207320113e47;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the power of 100^100', () => {
  const x = 100;
  const n = 100;
  const expectedVal = 1e200;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the -ve power of 2^-2', () => {
  const x = 2;
  const n = -2;
  const expectedVal = 0.25;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the -ve power of 3^-4', () => {
  const x = 3;
  const n = -4;
  const expectedVal = 0.012345679012345678;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the -ve power of -ve number of 3^-4', () => {
  const x = -2;
  const n = -2;
  const expectedVal = 0.25;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should find the -ve power of -ve number of 3^-4', () => {
  const x = -2;
  const n = -3;
  const expectedVal = -0.125;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should return undefined for 0 power 0', () => {
  const x = 0;
  const n = 0;
  const expectedVal = undefined;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should return undefined for 0 power -3', () => {
  const x = 0;
  const n = -3;
  const expectedVal = undefined;
  expect(findPower(x, n)).toBe(expectedVal);
});

test('should return 1 for anything  power 0', () => {
  const x = 3;
  const n = 0;
  const expectedVal = 1;
  expect(findPower(x, n)).toBe(expectedVal);
});
