//? Problem Statement
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//? Input: nums = [2,11,7,15], target = 9
//? Output: [0,2]


//? Solution
const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];    // 9-2=7
        if (map.has(diff)) {            
            return [map.get(diff), i];  // diff=2, get(diff)=0, i=2, return [0,2]
        }
        map.set(nums[i], i);            // {2:0, 11:1, 7:2, 15:3} num:index
    }
    return undefined
};

const nums = [2, 11, 7, 15];
const target = 9;
console.log(twoSum(nums, target));