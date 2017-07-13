import * as fib from './fibonacci.js';

test('tests various known solutions in Fibonacci sequence', ()=>{
  expect(fib.naive(0)).toBe(0);
  expect(fib.naive(1)).toBe(1);
  expect(fib.naive(2)).toBe(1);
  expect(fib.naive(5)).toBe(5);
  expect(fib.naive(10)).toBe(55);
  expect(fib.naive(23)).toBe(28657);
  expect(fib.naive(30)).toBe(832040);
});

test('throws on bad inputs', ()=>{
  expect(()=>{fib.naive(-1)}).toThrow();
  expect(()=>{fib.naive('abc')}).toThrow();
  expect(()=>{fib.naive()}).toThrow();
});
