const hexStringToRGB = (hexString) => ({
  r: parseInt(hexString.substring(1, 7).toLowerCase().substring(0, 2), 16),
  g: parseInt(hexString.substring(1, 7).toLowerCase().substring(2, 4), 16),
  b: parseInt(hexString.substring(1, 7).toLowerCase().substring(4, 6), 16),
});
console.log(hexStringToRGB("#FF9933"));
