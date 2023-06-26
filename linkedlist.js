/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
// const lists = [[]]
var mergeKLists = function (lists) {
    var a = [];
    lists.forEach((item) => {
        a = [...a, ...item];
    });

    // console.log(a)
    return a.sort();




};
mergeKLists(lists)