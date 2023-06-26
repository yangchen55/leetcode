
/**
 * @param {number} x
 * @return {number}
 */
const x = 120
var reverse = function (x) {
    const isNegative = x < 0;
    const a = x.toString().split('').reverse().join('')
    const b = parseInt(a) * (isNegative ? -1 : 1)

    if (b < Math.pow(-2, 31) || b > Math.pow(2, 31) - 1) {
        return 0;
    }
    return b
    // console.log(b)

};
reverse(x)
