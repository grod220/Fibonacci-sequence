import * as fib from './fibonacci.js';

jest.useFakeTimers();

describe('Recursive naive approach', ()=>{
  test('gets known solutions correct', ()=>{
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
})

describe('Recursive with memoization', ()=>{
  test('gets known solutions correct', ()=>{
    expect(fib.memoization(0)).toBe(0);
    expect(fib.memoization(1)).toBe(1);
    expect(fib.memoization(2)).toBe(1);
    expect(fib.memoization(5)).toBe(5);
    expect(fib.memoization(10)).toBe(55);
    expect(fib.memoization(23)).toBe(28657);
    expect(fib.memoization(30)).toBe(832040);
  });

  test('throws on bad inputs', ()=>{
    expect(()=>{fib.memoization(-1)}).toThrow();
    expect(()=>{fib.memoization('abc')}).toThrow();
    expect(()=>{fib.memoization()}).toThrow();
  });

  test('is faster than the naive approach', ()=>{
    function convertToMilli(timeArr) {
      let seconds = timeArr[0];
      let nanoSeconds = timeArr[1];
      return (seconds * 1000) + (nanoSeconds/1e6);
    }

    let time = process.hrtime();
    fib.memoization(30);
    let diffMemo = convertToMilli(process.hrtime(time));

    time = process.hrtime();
    fib.naive(30);
    let diffNaive = convertToMilli(process.hrtime(time));

    expect(diffNaive-diffMemo>0).toBeTruthy();
  });

//   test('is never run on the same input twice', ()=>{
//     fib.memoization = jest.fn().mockImplementation((num)=>fib.memoization(num));
//     console.log(fib.memoization())
//     // fib.memoization(10);
//     console.log(fib.memoization.mock.calls)
//   });
})

describe('Iterative method',()=>{
  test('gets known solutions correct', ()=>{
    expect(fib.iterative(0)).toBe(0);
    expect(fib.iterative(1)).toBe(1);
    expect(fib.iterative(2)).toBe(1);
    expect(fib.iterative(5)).toBe(5);
    expect(fib.iterative(10)).toBe(55);
    expect(fib.iterative(23)).toBe(28657);
    expect(fib.iterative(30)).toBe(832040);
  });

  test('throws on bad inputs', ()=>{
    expect(()=>{fib.iterative(-1)}).toThrow();
    expect(()=>{fib.iterative('abc')}).toThrow();
    expect(()=>{fib.iterative()}).toThrow();
  });

  test('Function is only called once', ()=>{
    fib.iterative = jest.fn(fib.iterative)
    fib.iterative(30);
    expect(fib.iterative).toHaveBeenCalledTimes(1);
  });
})
