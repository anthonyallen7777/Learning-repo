/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let test = [...nums]
    for (let i in test) {
        let sliceFront = nums.slice(0,i-1)
        let sliceBack = nums.slice(i,nums.length)
        const AccFront = sliceFront.reduce((accumulatedVals, prev) => {
            return accumulatedVals + prev
        }, nums[i])
        const AccBack = sliceBack.reduce((accumulatedVals, prev) => {
            return accumulatedVals + prev
        }, nums[i])
        console.log("CURRENT",nums[i])
        console.log(AccFront, AccBack)
    }
};

pivotIndex([1,7,3,6,5,6]);