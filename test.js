/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }

    const isFirstMatch = s.length > 0 && (s[0] === p[0] || p[0] === '.');

    if (p.length >= 2 && p[1] === '*') {
        return (
            isMatch(s, p.slice(2)) || (isFirstMatch && isMatch(s.slice(1), p))
        );
    }

    return isFirstMatch && isMatch(s.slice(1), p.slice(1));
};

// Example usage:
console.log(isMatch("aa", "a"));    // Output: false
console.log(isMatch("aa", "a*"));   // Output: true
console.log(isMatch("ab", ".*"));   // Output: true
