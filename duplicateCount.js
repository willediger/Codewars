function duplicateCount(text) {
  text_array_upper = text.toUpperCase().split('')
  return new Set(text_array_upper.filter((ei, i) => text_array_upper.filter((ej, j) => j > i).includes(ei))).size
}

console.log(duplicateCount('asdfaaf'));