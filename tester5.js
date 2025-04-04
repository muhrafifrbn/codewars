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

for (let i = 0; i < newStock.length; i++) {
  for (let v = 0; v < currentStock.length; v++) {
    if (currentStock[v][1] == newStock[i][1]) {
      //   console.log(currentStock[v][1]);
    } else {
      console.log(currentStock[v][1]);
    }
  }
}
