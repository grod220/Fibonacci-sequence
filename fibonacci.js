// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fibNaive (num) {
  if (num < 0 || typeof num !== "number") {
    throw new Error('Requires non-negative integer input')
  };

  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibNaive(num-1) + fibNaive(num-2)
}

module.exports = fibNaive;
