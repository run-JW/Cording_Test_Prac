/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const answer = [...new Set(nums)];
    const arrLen = nums.length;
    return (answer.length === arrLen) ? false : true;
};
