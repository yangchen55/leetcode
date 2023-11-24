

/**
 * @param {number[]} height
 * @return {number}
 */
const height = [1, 1]
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    while (left < right) {
        const minHeight = Math.min(height[left], height[right])
        const minDistance = right - left
        const currentArea = minDistance * minHeight
        maxArea = Math.max(currentArea, maxArea)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
    // console.log(maxArea)

};

maxArea(height)