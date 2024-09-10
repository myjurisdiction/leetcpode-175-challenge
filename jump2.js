/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const n = nums.length;
    const bestJumpArray = Array.from({ length: n }).fill(Infinity);
  
    function backtrack(index = 0) {
      if (index === n - 1) {
        return 0;
      }
  
      if (nums[index] === 0) {
        return Infinity;
      }
  
      if (bestJumpArray[index] !== Infinity) {
        return bestJumpArray[index];
      }
  
      for (let i = 1; i <= nums[index]; i++) {
        if (index + i < n) {
          let outcome = backtrack(index + i);
          if (outcome !== Infinity) {
            bestJumpArray[index] = Math.min(bestJumpArray[index], outcome + 1);
          }
        }
      }
      console.log(`bestJumpArray`, bestJumpArray, index);
      return bestJumpArray[index];
    }
  
    const result = backtrack();
  
    return result === Infinity ? 0 : result;
  };
  
  // l(jump([3, 2, 1, 0, 4]));
  l(jump([2, 3, 1, 1, 4]));