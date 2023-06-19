/**
 * @param {string} s
 * @return {boolean}
 */
s = "(]"
var isValid = function (s) {
    if (s !== "()" || s !== "[]" || s !== "{}") {
        return false
    } else {
        return true
    }

};
isValid(s)