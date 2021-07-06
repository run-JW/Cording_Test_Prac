/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const temp = [];
    const length = arr.length;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            temp.push(i);
        }
    }
    
    while(temp.length !== 0) {
        let i = temp.shift();
        i = i + count;
        arr.splice(i, 0, 0);
        arr.pop();
        count++;
    }
};
