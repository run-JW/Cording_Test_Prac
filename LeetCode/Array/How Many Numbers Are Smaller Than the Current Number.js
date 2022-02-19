/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = nums => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            if (curNum > nums[j]) count++;
        }
        result.push(count);
    }
    return result;
};
