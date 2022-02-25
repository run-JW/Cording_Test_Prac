/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let length = nums.length;
    let temp = nums[0];
    for (let i = 1; i < length; i++) {
        if (nums[i] === temp) {
            console.log(i);
            nums = nums.splice(i, 1);
            i -= 1;
            length -= 1;
            console.log(nums);
        }
        temp = nums[i];
    }
    return nums;
};
