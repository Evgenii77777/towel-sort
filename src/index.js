
// You should implement your task here.

module.exports = function towelSort(matrix) {
  
  newMatrix = [];
  if (matrix=== undefined || matrix.length === 0) {
    return newMatrix
  }
  matrix.forEach((el, index) => {
    if (index % 2 === 0) {
      el.sort((a,b)=>a-b);
    } else {
      el.sort((a, b) => b - a);
    }
    el.forEach((item) => {
      newMatrix.push(item);
    });
  });
  return newMatrix;
}
