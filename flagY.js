let str = 'let varName = "value"';

let regexp = /\w+/g;

regexp.lastIndex = 3;

let word = regexp.exec(str);

console.log(word[0]);
console.log(word.index);

let regexp1 = /\w+/y;

regexp1.lastIndex = 3;
console.log(regexp1.exec(str));

regexp1.lastIndex = 4;
console.log(regexp1.exec(str));