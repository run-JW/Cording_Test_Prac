/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
    let count = 0;
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i] >= nums[i + 1]) {
            count++;
            nums[i + 1] += 1;
        } else {
            i++;
        }
    }
    return count;
};
