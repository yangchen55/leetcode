/**
 * @param {string} s
 * @return {number}
 */
s = "luffy is still joyboy"
var lengthOfLastWord = function (s) {
    s = s.split(" ")
    const a = s.filter((i) => i !== '')
    return a[a.length - 1].length

};
lengthOfLastWord(s)