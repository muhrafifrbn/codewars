// const areaOrPerimeter = (lebar, panjang) => {
//   if (lebar == panjang) {
//     return lebar * panjang;
//   } else {
//     return 2 * (panjang + lebar);
//   }
// };

const areaOrPerimeter = (lebar, panjang) => (lebar == panjang ? lebar * panjang : 2 * (lebar + panjang));

console.log(areaOrPerimeter(10, 5));
