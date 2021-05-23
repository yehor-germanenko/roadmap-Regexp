let regexp = /(\w+\.)+\w+/g;

console.log('page.com page.com.ua'.match(regexp));

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = '2021-04-30';

let groups = str.match(dateRegexp).groups;

console.log(str)
console.log('year', groups.year);
console.log('month', groups.month);
console.log('day', groups.day);

let regexp1 = /^[\da-fA-F]{2}(:[\da-fA-F]{2}){5}$/i;

console.log(regexp1.test('01:32:54:67:89:AB'));
console.log(regexp1.test('0132546789AB'));
