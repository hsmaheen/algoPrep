import { fastFib } from './fibonacci';

test('should return the correct value when input is 3', () => {
  const number = 3;
  expect(fastFib(number)).toBe(2);
});

test('should return the correct value when input is 2', () => {
  const number = 2;
  expect(fastFib(number)).toBe(1);
});

test('should return the correct value when input is 1', () => {
  const number = 1;
  expect(fastFib(number)).toBe(1);
});

test('should return the correct value when input is 10', () => {
  const number = 10;
  expect(fastFib(number)).toBe(55);
});

test('should return the correct value when input is 100', () => {
  const number = 100;
  expect(fastFib(number)).toBe(354224848179262000000);
});
