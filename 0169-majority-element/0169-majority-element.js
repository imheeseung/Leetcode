/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const numbers = {};

    for (let i = 0; i < nums.length; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]]++;
        } else {
            numbers[nums[i]] = 1;
        }
    }
    
    let majorityElement;
    let count = 0;
    
    for (const num in numbers) {
        if (numbers[num] > count) {
            count = numbers[num];
            majorityElement = num;
        }
    }
    
    return majorityElement;
};