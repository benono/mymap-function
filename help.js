const {myMap} = require("./index")

// コールバック関数: 各要素を2倍にする
const multiplyByTwo = myMap((element) => element * 2);

// 使用例
const originalArray = [1, 2, 3, 4];
const newArray = multiplyByTwo(originalArray);

console.log(newArray); // 出力: [2, 4, 6, 8]