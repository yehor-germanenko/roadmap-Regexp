let str = "+7(903)-123-45-67";

console.log(str.match(/\d+/g));
console.log('0, 1, 2.47, 6846'.match(/\d+\.\d+/g));
console.log('Hello!... How are you?.....'.match(/\.+/g));

let regexp = /#[a-f\d]{6}\b/gi
let str1 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log(str1.match(regexp));