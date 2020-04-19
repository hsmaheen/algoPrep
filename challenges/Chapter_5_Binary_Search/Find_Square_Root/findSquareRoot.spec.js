import { getSquareRoot } from './findSquareRoot';

test('should return correct square root of 9', () => {
  const num = 9;
  expect(getSquareRoot(num)).toBe(3);
});

test('should return correct square root of 256', () => {
  const num = 256;
  expect(getSquareRoot(num)).toBe(16);
});

test('should return correct square root of 10000000', () => {
  const num = 10000000;
  expect(getSquareRoot(num)).toBe(3162);
});

test('should return nearest  square root of 24', () => {
  const num = 24;
  expect(getSquareRoot(num)).toBe(4);
});

test('should return correct  square root of 1', () => {
  const num = 1;
  expect(getSquareRoot(num)).toBe(1);
});

test('should return nearest  square root of 2', () => {
  const num = 2;
  expect(getSquareRoot(num)).toBe(1);
});

test('should return null if num is null', () => {
  const num = null;
  expect(getSquareRoot(num)).toBe(null);
});
