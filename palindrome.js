var isPalindrome = function (x) {
    const a = (x.toString().split('').reverse().join(''))
    const b = parseInt(a) * Math.sign(x)
    if (b == x) {
        console.log("its palindrome")
    } else {
        console.log("its not palindrome")
    }


};
isPalindrome(-11211)