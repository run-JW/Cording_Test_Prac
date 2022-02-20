/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = nums => {
    const result = [];
    
    for (let i = 0; i < nums.length / 2; i++) {
        const freq = nums[2 * i];
        const val = nums[(2 * i) + 1];
        
        for (let j = 0; j < freq; j++) {
            result.push(val);
        }
    }
    return result;
};
