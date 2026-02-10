"use strict";
function zipList(list1, list2) {
    const result = [];
    const maxLength = Math.max(list1.length, list2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < list1.length) {
            result.push(list1[i]);
        }
        if (i < list2.length) {
            result.push(list2[i]);
        }
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    const maxLength = Math.max(list1.length, list2.length);
    return Array.from({ length: maxLength }, (_, i) => {
        const elements = [];
        if (i < list1.length) {
            elements.push(list1[i]);
        }
        if (i < list2.length) {
            elements.push(list2[i]);
        }
        return elements;
    }).flat();
}
// Example usage:
const listA = [1, 2, 3];
const listB = ['a', 'b', 'c', 'd'];
console.log(zipList(listA, listB)); // Output: [1, 'a', 2, 'b', 3, 'c', 'd']
console.log(zipListTheFunctionalWay(listA, listB)); // Output: [1, 'a', 2, 'b', 3, 'c', 'd']
