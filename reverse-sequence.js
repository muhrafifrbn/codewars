const reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((e, i) => i + 1)
    .reverse();
};

console.log(reverseSeq(5));
