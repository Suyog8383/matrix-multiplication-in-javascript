let arr1 = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

let arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr3 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      arr3[i][j] += arr1[i][k] * arr2[k][j];
    }
  }
}

console.log("multiplication", arr3);
