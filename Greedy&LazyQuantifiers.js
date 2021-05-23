console.log('123 456'.match(/\d+? \d+?/g));

let regexp = /<!--.*?-->/gs;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log(str.match(regexp));

let regexp1 = /<[^<>]+>/gs;

let str1 = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(str1.match(regexp1));
