/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = num => {
    const temp = [];
    const processed = String(num).split('').sort();
    
    temp.push(processed.shift());
    temp.push(processed.pop());
    
    return Number(temp.join('')) + Number(processed.join(''));
};
