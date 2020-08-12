import { robinKarpStringSearch } from './stringSearchRobinKarp';

describe('Robin Karp Algo should work', () => {
  it('should be able to get the target string if it exists in the start', () => {
    const actualString = 'abcdabcad';
    const targetString = 'abc';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(
      actualString.substring(targetIdx, targetIdx + targetString.length)
    ).toEqual(targetString);
  });

  it('should be able to get the target string if it exists in the middle', () => {
    const actualString = 'abcdabcad';
    const targetString = 'dab';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(
      actualString.substring(targetIdx, targetIdx + targetString.length)
    ).toEqual(targetString);
  });

  it('should be able to get the target string if it exists in the end', () => {
    const actualString = 'abcdabcad';
    const targetString = 'cad';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(
      actualString.substring(targetIdx, targetIdx + targetString.length)
    ).toEqual(targetString);
  });

  it('should return -1 if the string does not exits', () => {
    const actualString = 'abcdabcad';
    const targetString = 'cdd';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(targetIdx).toEqual(-1);
  });

  it('should return -1 if tareget string is greater than actual string', () => {
    const actualString = 'abcdabcad';
    const targetString = 'cddabcdabcad';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(targetIdx).toEqual(-1);
  });

  it('should return -1 if actual string is empty', () => {
    const actualString = '';
    const targetString = 'cddabcdabcad';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(targetIdx).toEqual(-1);
  });

  it('should return -1 if actual tareget string is empty', () => {
    const actualString = 'abc';
    const targetString = '';
    const targetIdx = robinKarpStringSearch(actualString, targetString);

    expect(targetIdx).toEqual(-1);
  });
});
