/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = (encoded, first) => {
    const arr = [first];
    
    for (let i = 0; i < encoded.length; i++) {
        const decodedVal = encoded[i] ^ arr[arr.length - 1];
        arr.push(decodedVal);
    }
    
    return arr;
};
