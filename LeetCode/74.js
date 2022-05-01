/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    const result = matrix.reduce((acc, cur) => acc.concat(cur));
    
    return (result.indexOf(target) > -1) ? true : false;  
};
