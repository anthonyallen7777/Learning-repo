/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var runningSum = function(nums) {
    let final = [];
    for (let i in nums) {
        let part = nums.slice(0,i)
        //add up every value until the current index
        final.push(part.reduce((accumulated, curr) => 
        accumulated + curr, nums[i]));
    }
    console.log(final)
    return final;
};
  
runningSum([1,2,3,4])
runningSum([1,1,1,1,1]);
runningSum([3,1,2,10,1]);