function solution(number) {
  let result = [];
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        result.push(i);
      } else {
        result.push(0);
      }
    }
    return result.reduce((a, b) => a + b);
  } else {
    result.push(0);
    return result.reduce((a, b) => a + b);
  }
}

console.log(solution(0));
