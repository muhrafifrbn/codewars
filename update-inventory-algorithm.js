function updateInventory(curStock, newStock) {
  // thank you for solving my kata :)

  let stock = curStock.map((curItem) => {
    let addStock = [];
    let indexInStock = newStock.findIndex((newItem) => newItem[1] == curItem[1]);
    if (indexInStock >= 0) {
      addStock[0] = curItem[0] + newStock[indexInStock][0];
      addStock[1] = curItem[1];
      return addStock;
    }
    return curItem;
  });

  let readyStock = curStock.map((item) => item[1]);

  readyStock = newStock.filter((item) => !readyStock.includes(item[1]));

  stock = [...stock, ...readyStock];

  stock.sort((a, b) => a[1].localeCompare(b[1]));

  return stock;
}

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

console.log(updateInventory(currentStock, newStock));
