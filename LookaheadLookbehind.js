let regexp = /(?<![-\d])\d+/g;

let str = '0 12 -5 123 -18';

console.log(str.match(regexp));

let str1 = '...<body style="...">...';
str1 = str1.replace(/(?<=<body.*>)/, `<h1>Hello</h1>`);

console.log(str1)
