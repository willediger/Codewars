var countBits = function(n) {
  return n.toString(2).split('').filter(x => x != '0').length;
};

console.log(countBits(1234));