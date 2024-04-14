/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const nonDuplicateArr = [...new Set(nums)];
    
    if (nonDuplicateArr.length === nums.length) {
        return false;
    }
    
    return true;
};