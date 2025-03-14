function solution(str) {
  let kata = str.split("");
  let kataBaru = [];

  for (let i = 0; i < kata.length; i = i + 2) {
    kata[i + 1] != undefined ? kataBaru.push(`${kata[i] + kata[i + 1]}`) : kataBaru.push(`${kata[i] + "_"}`);
  }

  return kataBaru;
}

console.log(solution("abc"));
