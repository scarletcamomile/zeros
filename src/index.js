module.exports = function getZerosCount(number) {
  let fives = 5;
  let zeros = 0, zero = 0;
  for (;;) {
    zero = Math.floor(number/fives);
    if (zero < 1) break;
    zeros += zero;
    fives *= 5;
  }
  return zeros;
  }
