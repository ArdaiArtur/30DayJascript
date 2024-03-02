/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var ret=0;
    for (let i = 0; i < nums.length; i++) {
        ret= fn(init,nums[i]);
        init=ret;
    }
    return init;
};