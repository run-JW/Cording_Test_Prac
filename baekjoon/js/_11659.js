const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 3
5 4 3 2 1
1 3
2 4
5 5
`
).trim().split('\n');

const arr = stdin[1].split(' ').map(v => parseInt(v));
const sumArr = new Array(arr.length + 1).fill(0);
const result = [];

arr.forEach((val, idx) => {
  sumArr[idx + 1] = sumArr[idx] + val;
});

stdin.slice(2).forEach(line => {
  const [i, j] = line.split(' ').map(v => parseInt(v));
  result.push(sumArr[j] - sumArr[i - 1]);
});

console.log(result.join('\n'));
