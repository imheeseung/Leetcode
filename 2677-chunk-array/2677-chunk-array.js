/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    let result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        let chunkArr = arr.slice(i, i + size);
        result.push(chunkArr);
    };
    
    return result;
};
