let goodInput = '12:34';
let badInput = '12:345';

let regexp = /^\d\d:\d\d$/;
console.log(regexp.test(goodInput));
console.log(regexp.test(badInput));

let regexp1 = /^$/

console.log(regexp1.test(''))