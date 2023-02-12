

const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}



var romanToInt = function (s) {
    var result = 0

    for (i = 0; i < s.length; i++) {
        const current = sym[s[i]]
        const next = sym[s[i + 1]]
        if (current < next) {
            result += next - current
            i++;

        } else {
            result += sym[s[i]]

        }

    }
    return result



}





romanToInt("MCMXCIV");