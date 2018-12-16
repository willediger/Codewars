function findEvenIndex(arr) {
  return arr.map((val, i) => arr.reduce((acc, val, j) => i < j ? acc + val : acc, 0) == arr.reduce((acc, val, j) => i > j ? acc + val : acc, 0)).indexOf(true);
}

console.log(findEvenIndex([1,2,3,4,5,6]))