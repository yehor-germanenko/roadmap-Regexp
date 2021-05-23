const regexp = /x\p{Hex_Digit}\p{Hex_Digit}\p{Hex_Digit}/u;

console.log('some unicode: xAFF'.match(regexp));
