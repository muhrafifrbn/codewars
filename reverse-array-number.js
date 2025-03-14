function digitize(n) {
  return Array.from(n.toString())
    .reverse()
    .map((x) => parseInt(x));
}

console.log(digitize(0));
