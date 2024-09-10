/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const l = console.log;

var jumpBruteForceOptimised = function (nums) {
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
    return bestJumpArray[index];
  }

  const result = backtrack();

  return result === Infinity ? 0 : result;
};

l(jumpBruteForceOptimised([3, 2, 1, 0, 4]));
l(jumpBruteForceOptimised([2, 3, 1, 1, 4]));

/**
 * There is an another solution which uses the greedy algorithm and reduce the time complexity to O(n ** 2)
 *  This is also assuming the fact that we can react nums[n - 1]
 */

function jumpGameIIOptimsed(nums) {
  let left = 0,
    right = 0,
    res = 0;
  const n = nums.length;

  while (right < n - 1) {
    let farthest = 0;
    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }

    left = right + 1;
    right = farthest;
    res++;
  }

  return res;
}

// l(jumpGameIIOptimsed([3, 2, 1, 0, 4]));   // the soplution failed for this case.
l(jumpGameIIOptimsed([2, 3, 1, 1, 4]));
