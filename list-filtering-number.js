function filter_list(l) {
  let number = l.filter((e) => typeof e === "number");
  return number;
}

console.log(filter_list([1, 2, "a", "b"]));
