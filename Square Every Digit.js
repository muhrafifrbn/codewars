function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((a) => a ** 2)
      .join("")
  );
}

console.log(squareDigits(3212));
