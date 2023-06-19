const l1 = [9, 9, 9, 9];
const l2 = [9, 9, 9, 9, 9, 9, 9];

const result = [];
let carry = 0;
let i = l1.length - 1;
let j = l2.length - 1;

while (i >= 0 || j >= 0 || carry !== 0) {
    const sum = (l1[i] || 0) + (l2[j] || 0) + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
}

console.log(result); // Output: [1, 0, 9, 9, 9, 0, 8]
