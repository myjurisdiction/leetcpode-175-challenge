/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

This we can solve via three pointers apprach.

take three pointers,
i = m - 1;
j = n - 1;
k = m + n - 1, rest see the code to follow the steps.
 */

const l = console.log;

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  return nums1;
};

l(merge([1, 2, 3, 0, 0, 0], 3, [2, 3, 6], 3));

