

/**
 * @param {string} digits
 * @return {string[]}
 */
const digits = ["a", "b", "c"]
const dig = ["d", "e", "f"]
const list = []
var letterCombinations = function (digits, dig) {
    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < dig.length; j++) {
            list.push(digits[i] + dig[j])
            console.log(digits[i] + dig[j])
        }


    }
    console.log(list)

};
letterCombinations(digits, dig)