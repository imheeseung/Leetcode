/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let initialValue = init;

    for (let i = 0; i < nums.length; i++) {
        initialValue = fn(initialValue, nums[i]);
    }

    return initialValue;
};