function DNAStrand(dna){
  return dna.split('').map(e => 'TA'.includes(e) ? 'TA'[('TA'.indexOf(e) + 1) % 2] : 'CG'[('CG'.indexOf(e) + 1) % 2]).join('');
}

console.log(DNAStrand('ATCGATGC'));