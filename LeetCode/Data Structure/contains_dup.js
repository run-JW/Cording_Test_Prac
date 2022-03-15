/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  const temp = [];
  for (const num of nums) {
    if (temp.indexOf(num) === -1) {
      temp.push(num);
    } else {
      return true;
    } 
  }
  return false;
};
