function highAndLow(numbers) {
  let number = numbers.split(" ");
  number = number.map((a) => parseInt(a));
  let max = number[0];
  let min = number[0];
  let result = [];
  number.forEach((a) => {
    if (a > max) {
      max = a;
    }
    if (a < min) {
      min = a;
    }
  });
  result.push(max);
  result.push(min);
  return result.join(" ");
}

console.log(highAndLow("1 9 3 4 -5"));
