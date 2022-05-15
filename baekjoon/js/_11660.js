const matrixSize = stdin[0].split(' ')[0];
const matrix = stdin.slice(1, matrixSize).map(arr => arr.split(' ').map(v => parseInt(v)));

console.log(matrix);
