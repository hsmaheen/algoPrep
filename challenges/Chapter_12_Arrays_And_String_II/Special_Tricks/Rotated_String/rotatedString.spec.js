import { isRotatedString } from './rotatedString';
describe('Algo to Check if string is rotated Should Work', () => {
  test('should return true if the string of length 6 is rotated', () => {
    const originalString = 'canada';
    const stringToCheck = 'dacana';
    expect(isRotatedString(stringToCheck, originalString)).toBe(true);
  });

  test('should return false if the string of length 6 is not rotated', () => {
    const originalString = 'canada';
    const stringToCheck = 'dacanas';
    expect(isRotatedString(stringToCheck, originalString)).toBe(false);
  });

  test('should return false if the string of length 3 is not rotated', () => {
    const originalString = 'abc';
    const stringToCheck = 'cba';
    expect(isRotatedString(stringToCheck, originalString)).toBe(false);
  });

  test('should return false if original string is null', () => {
    const originalString = null;
    const stringToCheck = 'cba';
    expect(isRotatedString(stringToCheck, originalString)).toBe(false);
  });

  test('should return false if string to check is null', () => {
    const originalString = 'abc';
    const stringToCheck = null;
    expect(isRotatedString(stringToCheck, originalString)).toBe(false);
  });
});
