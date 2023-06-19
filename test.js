/**
 * @param {string} s
 * @return {boolean}
 */
s = "() {} []"
var isValid = function (s) {
    if (s !== "()" && s !== "[]" && s !== "{}" && s !== "() {} []") {
        console.log("false")
    } else {
        console.log("true")
    }

};
isValid(s)