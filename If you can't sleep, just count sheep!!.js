let countSheep = (num) => [...Array(num)].map((e, i) => i + 1 + " sheep...").join("");

console.log(countSheep(1));
