function pigIt(str) {
  let kata = str.split(" ");
  let completeWord = [];
  kata.forEach((item) => {
    let firstWord = item.substr(0, 1);
    if (firstWord.includes("!") || firstWord.includes("#") || firstWord.includes("?")) {
      completeWord.push(item);
    } else {
      completeWord.push(item.substr(1) + firstWord + "ay");
    }
  });

  return completeWord.join(" ");
}

console.log(pigIt("Hello world !"));
