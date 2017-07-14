// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

export function naive(num) {
  if (num < 0 || typeof num !== "number") {
    throw new Error('Requires non-negative integer input')
  };

  if (num === 0) return 0;
  if (num === 1) return 1;

  return naive(num-1) + naive(num-2)
}

export function memoization(num, hash = {'0': 0, '1':1}) {
  if (num < 0 || typeof num !== "number") {
    throw new Error('Requires non-negative integer input')
  };

  if (!hash.hasOwnProperty(num)) {
    hash[num] = memoization(num-1,hash) + memoization(num-2,hash);
  }
  return hash[num];
}

export function iterative(num) {
  if (num < 0 || typeof num !== "number") {
    throw new Error('Requires non-negative integer input')
  };

  if (num === 0) return 0;

  let prevPrev = 0;
  let prev = 1;
  let curr = 1;

  for (let i=2; i<num; i++) {
    prevPrev = prev;
    prev = curr;
    curr = prevPrev + prev;
  }
  return curr;
}















;
