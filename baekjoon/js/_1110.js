let n = Number(require('fs').readFileSync('/dev/stdin').toString());

let original = n;
let data = n;
let temp1 = 0;
let temp2 = 0;
let sum = 0;
let count = 0;
do {
    if (data < 10) {
        temp1 = 0;
    } else {
        temp1 = Math.floor(data / 10);
    }
    temp2 =  data % 10;
    sum = temp1 + temp2;

    data = Number(String(temp2) + String(sum % 10));
    count++;

} while (data !== original);

console.log(count);
