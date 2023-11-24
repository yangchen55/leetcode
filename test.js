

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const list1 = []
const list2 = [0]

var mergeTwoLists = function (list1, list2) {
    list1.splice(1, 0, ...list2)
    console.log(list1.sort())

};
mergeTwoLists(list1, list2)