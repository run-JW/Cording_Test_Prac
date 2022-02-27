/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    const jewelsArr = jewels.split('')
    let cnt = 0;
    
    stones.split('').forEach(el => {
       if (jewelsArr.includes(el)) {
           cnt++;
       }
    });
    return cnt;
};
