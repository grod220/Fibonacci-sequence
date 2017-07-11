const fibNaive = require('./fibonacci');

test('tests various known solutions in Fibonacci sequence', ()=>{
  expect(fibNaive(0)).toBe(0);
  expect(fibNaive(1)).toBe(1);
  expect(fibNaive(2)).toBe(1);
  expect(fibNaive(5)).toBe(5);
  expect(fibNaive(10)).toBe(55);
  expect(fibNaive(23)).toBe(28657);
  expect(fibNaive(30)).toBe(832040);
});

test('throws on bad inputs', ()=>{
  expect(()=>{fibNaive(-1)}).toThrow();
  expect(()=>{fibNaive('abc')}).toThrow();
  expect(()=>{fibNaive()}).toThrow();
});
