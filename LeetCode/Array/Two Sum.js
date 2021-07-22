/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const answer = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j <nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                answer.push(i);
                answer.push(j);
                break;
            }
        }
    }
    return answer;
};
