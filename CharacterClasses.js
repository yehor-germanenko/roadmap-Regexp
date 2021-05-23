let str1 = "+7(903)-123-45-67";

let regexp1 = /\d/g;

console.log(str1.match(regexp1).join(''))

let regexp3 = /CS.4/;

console.log( "CSS4".match(regexp3)[0] );
console.log( "CS-4".match(regexp3)[0] );
console.log( "CS 4".match(regexp3)[0] );

console.log( '1 - 5'.match(/\d\s-\s\d/)[0])