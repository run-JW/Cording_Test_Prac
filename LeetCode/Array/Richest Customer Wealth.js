/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts => {
    let result = 0;
    accounts.forEach(el => {
        const sum = el.reduce((a, b) => a + b);
        if (result < sum) {
            result = sum;
        }
    });
    return result;
};
