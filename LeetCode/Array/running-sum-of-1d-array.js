/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    const result = [];
    let temp = 0;
    
    nums.forEach(el => {
        temp += el;
        result.push(temp);
    })
    
    return result;
};
