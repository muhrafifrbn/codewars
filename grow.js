// function grow(x) {
//   let angka = 1;
//   for (var i = 0; i < x.length; i++) {
//     angka *= x[i];
//   }
//   return angka;
// }

const grow = (x) => x.reduce((i, a) => i * a);

console.log(grow([1, 2, 3, 4]));
