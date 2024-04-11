/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const onlyWordAndNumber = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse = ""
    
    for (let i = onlyWordAndNumber.length - 1; i >= 0; i--) {
        reverse += onlyWordAndNumber[i];
    }
    
    if (onlyWordAndNumber === reverse) {
        return true;
    }
    
    return false
};