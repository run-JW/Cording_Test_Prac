/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = sentences => {
    const result = [];
    sentences.forEach(el => {
        const process = el.split(' ');
        result.push(process.length);
    });
    
    return result.reduce((a, b) => Math.max(a, b));
};
