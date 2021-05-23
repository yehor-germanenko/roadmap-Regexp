let str = `He said: "She's the one!".`;

console.log(str.match(/(?<quote>['"])(.*?)\k<quote>/g));