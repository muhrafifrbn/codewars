// function positiveSum(arr) {
//   var sum = arr.filter((a) => {
//     return a > 0;
//   });
//   if (sum.length == 0) {
//     return 0;
//   }
//   //   return sum.reduce((a, b) => a + b);
// }

const positiveSum = (arr) => {
  const sum = arr.filter((a) => a > 0);
  if (sum.length === 0) {
    return 0;
  } else {
    return sum.reduce((a, b) => a + b);
  }
};

console.log(positiveSum([-1, -2, -3, -4, 5]));
