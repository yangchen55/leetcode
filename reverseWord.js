
// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
const reverseWord = ['cake', 'pound', 'steal']


const reverse = (arg) => {
    let leftside = 0;
    let rightSide = arg.length - 1;
    while (leftside < rightSide) {
        const temp = arg[leftside]
        arg[leftside] = arg[rightSide]
        arg[rightSide] = temp;
        leftside++;
        rightSide--;
        console.log(arg)

    }




    // console.log(message.join('').split(' ').reverse().join(' '))

}
// reverse(message)
reverse(reverseWord)


