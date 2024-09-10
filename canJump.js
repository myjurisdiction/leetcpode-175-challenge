/**
 * @param {number[]} nums
 * @return {boolean}
 *
 *  nums = [2,3,1,1,4]
 * nums = [3,2,1,0,4]
 */
var canJump = function (nums) {
  const positions = new Array(nums.length).fill(null);
  const n = nums.length;

  function makeJump(index = 0) {
    if (positions[index] != null) {
      return positions[index];
    }

    if (index === n - 1) {
      return true;
    }

    if (nums[index] === 0) {
      return false;
    }

    for (let j = 1; j <= nums[index]; j++) {
      if (i + j < nums.length) {
        const outcome = makeJump(index + j);
        if (outcome) {
          positions[index] = true;
          return positions[index];
        }
      }
    }

    positions[index] = false;
    return positions[index];
  }

  return makeJump(index);
};

l(canJump([2, 3, 1, 1, 4]));

l(canJump([3, 2, 1, 0, 4]));
