/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
nums1 = [1, 3], nums2 = [2]
var findMedianSortedArrays = function (nums1, nums2) {
    const total = [...nums1, ...nums2].sort((a, b) => a - b)
    const middleIndex = Math.floor(total.length / 2);

    console.log(total)
    if (total.length % 2 === 0) {
        const result = ((total[middleIndex - 1]) + (total[middleIndex])) / 2
        console.log(total, result)
    } else {
        // const average = total.reduce((accumulater, currentValue) => accumulater + currentValue) / total.length
        const result = total[middleIndex]
        console.log(result)

    }

};

findMedianSortedArrays(nums1, nums2)