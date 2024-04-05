/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
    let result;
    
    if (Array.isArray(obj)) {
        result = obj.length === 0;
        
        return result;
    }
    
    result = Object.keys(obj).length === 0;
    
    return result;
};