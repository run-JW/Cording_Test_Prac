/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
    const result = [];
    for (let i = 0; i < indices.length; i++) {
        const char = s[i];
        const index = indices[i];
        result[index] = char;
    }
    
    return result.join('');
};
