let str = `MacBook: 1000$
AirPods: 250€
iPhone: 700£`;

console.log(str.match(/\p{Sc}$/gum));
console.log(str.match(/\p{Sc}\n/gum))