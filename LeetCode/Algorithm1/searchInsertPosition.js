/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let [l, h] = [0, nums.length - 1];
    
    while(l < h) {
        const mid = Math.trunc((l + h) / 2);
        if (target <= nums[mid]) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }
    if (nums[h] === target) return h;
    else return (nums[h] > target) ? h : h + 1;
};
