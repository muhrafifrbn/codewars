function multipleSplit(string, delimiters = []) {
  if (delimiters.length == 0) return;
  let newData = [];
  let previousData = [];
  for (let i = 0; i < delimiters.length; i++) {
    if (i == 0) {
      newData = string.split(delimiters[i]);
      continue;
    }

    previousData.push(newData[i - 1]);
    newData = [...previousData, ...newData[i].split(delimiters[i])];
  }

  if (newData[newData.length - 1] == "") {
    newData.pop();
  }

  return newData;
}

console.log(multipleSplit("Rafif Rabbani-hello+barca", [" ", "-", "+"]));
