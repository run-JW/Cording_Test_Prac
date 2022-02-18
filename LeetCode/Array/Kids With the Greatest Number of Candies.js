/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const result = [];
    const greatestNum = candies.reduce((a, b) => Math.max(a, b));
    
    candies.forEach(el => {
        if (el + extraCandies >= greatestNum) {
            result.push(true);
        } else {
            result.push(false);
        }
    });
        
    return result;
};
