/**
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 
 */

function getTwoSumIndex(nums: Array<number>, targetSum: number) {
    let result = null;
    if (!nums || nums.length < 2) {
        return result;
    }

    const hashMap = {};
    nums.forEach((item: number, index: number) => {
        hashMap[index] = targetSum - item;
    });

    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const j = nums.indexOf(hashMap[i]);
        if (j > -1 && j !== i) {
            result = [i, j];
            break;
        }
    }

    return result;
}

function getTwoSumIndex2(nums: Array<number>, targetSum: number) {
    let result = null;
    if (!nums || nums.length < 2) {
        return result;
    }

    const hashMap = new Map();
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        const num = targetSum - nums[i];
        if (hashMap.get(num) && i != hashMap.get(num)) {
            result = [i, hashMap.get(num)];
            break;
        }
        hashMap.set(nums[i], i);
    }

    return result;
}

export {
    getTwoSumIndex,
    getTwoSumIndex2
}