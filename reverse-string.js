function solution(str) {
  const rever = str.split("");
  let isi = [];
  for (var i = rever.length - 1; i >= 0; i--) {
    isi.push(rever[i]);
  }
  return isi.join("");
}

console.log(solution("world"));
