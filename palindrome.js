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

// note 
// Math.sign return 1 or -1 depending on the sign, if -121, it will return -1, then will be multiplied itj paresint 
