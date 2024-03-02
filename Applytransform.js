/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) { 
    const transformed = [];
    for (let index = 0; index < arr.length; index++) {
        transformed[index] = fn(arr[index],index);
        
    }
    return transformed;
};