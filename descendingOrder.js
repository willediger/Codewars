function descendingOrder(n){
  return n.toString().split('').sort().reverse().join('');
}

console.log(descendingOrder(889812345678));