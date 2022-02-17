/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
    const result = [];
    
    for (let i = 0; i < nums.length / 2; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    
    return result;
};
