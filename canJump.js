/**
 * @param {number[]} nums
 * @return {boolean}
 *
 *  nums = [2,3,1,1,4]
 * nums = [3,2,1,0,4]
 */
const l = console.log;

var canJumpBruteForceOptimised = function (nums) {
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
      if (index + j < nums.length) {
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

  return makeJump();
};

l(canJumpBruteForceOptimised([2, 3, 1, 1, 4]));

l(canJumpBruteForceOptimised([3, 2, 1, 0, 4]));

/**
 * A Greedy Algorithm. O(n)
 *  let's take this ex : [2, 3, 1, 1, 4]
 *
 * 1. we store the final destination which is the last element's index position.
 *    let goalPost = n - 1;
 * 2. we start with index n - 2. and go backwards. (will use loop for this)
 *    2.1. Along the way we check if nums[index] + index >= goalPost.
 *    2.2. If true, we reduce the golaPost by assigning it the current index. If not, we continue.
 *    2.3. We repeat
 * 3. we return True if golePost = 0, else, return False
 *
 */

function canJumpOptimised(nums) {
  const n = nums.length;
  let gp = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] + i >= gp) {
      gp = i;
    }
  }

  return gp === 0 ? true : false;
}

l(canJumpOptimised([2, 3, 1, 1, 4]));

l(canJumpOptimised([3, 2, 1, 0, 4]));
