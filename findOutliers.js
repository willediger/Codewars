function findOutlier(integers) {
  odds = 0;
  for (let i = 0; i < 3; i++) {
    odds += integers[i] % 2;
  }
  (odds > 1) ? odd = true : odd = false;
  return integers.filter(e => (odd) ? e % 2 == 0 : e % 2 == 1)[0];
}

console.log(findOutlier([2,6,8,10,1]));
console.log(findOutlier([1,1,2,1,1]));