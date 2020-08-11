/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// first we'll make a set out of nums
// then map nums into [set.has(target - elem), index]
// this should result in an array with 2 [true, index] values
// then filter the array to find those values
// and take the indices from the arrays and return them
var twoSum = function(nums, target) {
  const diffs = nums.map((num, index) => {
    const otherNumSet = nums.slice();
    otherNumSet[index] = undefined;
    return [otherNumSet.includes(target - num), index]
  });
  const indices = diffs.filter((numIndex) => numIndex[0]);
  return [indices[0][1], indices[1][1]];
};