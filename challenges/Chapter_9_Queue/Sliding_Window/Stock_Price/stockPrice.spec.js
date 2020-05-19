import { StockPriceDays } from './stockPrice';

describe('Stock Price Algo Should work', () => {
  test('should get the correct max is the last 4 days', () => {
    const stock = new StockPriceDays(4);
    stock.addData(1, 2);
    stock.addData(4, 4);
    stock.addData(3, 7);
    stock.addData(2, 9);
    stock.addData(5, 11);
    const res = stock.getMax();
    expect(res).toBe(5);
  });

  test('should get the correct max is the last 3 days', () => {
    const stock = new StockPriceDays(4);
    stock.addData(32, 1);
    stock.addData(45, 1);
    stock.addData(37, 2);
    stock.addData(42, 3);
    const res = stock.getMax();
    expect(res).toBe(45);
  });

  test('should get the correct max for large difference in days', () => {
    const stock = new StockPriceDays(4);
    stock.addData(32, 1);
    stock.addData(45, 1);
    stock.addData(37, 2);
    stock.addData(42, 55);
    const res = stock.getMax();
    expect(res).toBe(42);
  });

  test('should return null if no stock prices are present', () => {
    const stock = new StockPriceDays(4);
    const res = stock.getMax();
    expect(res).toBe(null);
  });
});
