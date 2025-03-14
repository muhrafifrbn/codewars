// function getCount(str) {
//   const value = str.split("");
//   let count = 0;
//   for (var i = 0; i < value.length; i++) {
//     if (value[i].includes("a") || value[i].includes("i") || value[i].includes("u") || value[i].includes("e") || value[i].includes("o")) {
//       count++;
//     }
//   }
//   return count;
// }

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("abracadabra"));
