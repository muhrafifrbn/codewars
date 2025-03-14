function sc(floor) {
  let teriak = "";
  if (floor <= 1) return teriak;

  for (let i = 1; i <= floor; i++) {
    if (i == floor) {
      return floor <= 6 ? (teriak += "Pa! Aa!") : (teriak += "Pa!");
    }
    teriak += "Aa~ ";
  }
}

console.log(sc(3));
