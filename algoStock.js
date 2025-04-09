const currentStock = [
  [25, "HTC"],
  [1000, "Nokia"],
  [50, "Samsung"],
  [33, "Sony"],
  [10, "Apple"],
];

const newStock = [
  [5, "LG"],
  [10, "Sony"],
  [4, "Samsung"],
  [5, "Apple"],
];

const notStock = [];

for (let i = 0; i < newStock.length; i++) {
  let status = false;
  for (let v = 0; v < currentStock.length; v++) {
    if (newStock[i][1] == currentStock[v][1]) {
      status = true;
    }
  }

  if (!status) {
    notStock.push(newStock[i]);
  }
}

console.log(notStock);
