/* This does not work for 5 + 5 - it's too complex, zip isn't needed */
/** 
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * returns a new list with each element.val = f(l1.val, l2.val)
 * note that l1.val or l2.val may be null, but not both
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @param {function} f 
 * @return {{head: ListNode, tail: ListNode}}
 */
function zipLists(l1, l2, f) {
  const zippedList = new ListNode(null, null);
  let zippedNode = null;
  let zippingl1 = l1;
  let zippingl2 = l2;
  while(zippingl1 !== null || zippingl2 !== null) {
    const val1 = zippingl1 !== null ? zippingl1.val : null;
    const val2 = zippingl1 !== null ? zippingl2.val : null;
    const newNode = new ListNode(f(val1, val2), null);
    if (zippedNode === null) {
      zippedList.val = newNode.val;
      zippedNode = zippedList;
    } else {
      zippedNode.next = newNode;
      zippedNode = newNode;
    }
    zippingl1 = zippingl1 !== null ? zippingl1.next : null;
    zippingl2 = zippingl2 !== null ? zippingl2.next : null;
  }
  return {head: zippedList, tail: zippedNode};
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  // this will make a list where every element except the tail has one digit
  let {head, tail} = zipLists(l1, l2, (val1, val2) => {
    if(val1 === null) {
      return val2;
    } else if(val2 === null) {
      return val1;
    } else {
      let added = val1 + val2 + carry;
      carry = 0;
      if (added > 9) {
        const mod = added % 10;
        carry = Math.floor((added - mod) / 10);
        added = mod;
      }
      return added;
    }
  });
  // expand the tail
  const tailDigits = tail.val.toString().split('');
  tail = tailDigits.reduce((digits, digit) => {
    digits.next = new ListNode(Number(digit), null);
  }, new ListNode(Number(tailDigits[0]), null));
  return head;
 };