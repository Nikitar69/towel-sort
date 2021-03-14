
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sorted = []

  if (matrix == undefined) {
    return sorted
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    if (i % 2 === 0) {
      for (let j = 0; j < row.length; j++) {
        sorted.push(row[j])
      }
    } else {
      row.reverse()
      for (let j = 0; j < row.length; j++) {
        sorted.push(row[j])
      }
    }


  }
  return sorted

}
