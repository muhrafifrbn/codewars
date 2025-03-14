function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/gi, "")
    .split("")
    .reverse()
    .join("");
}

console.log(reverseLetter("ultr53o?n"));
