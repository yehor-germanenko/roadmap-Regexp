let str = "Java, JavaScript, PHP, C, C++";

console.log(str.match(/Java(Script)?|C(\+\+)?|PHP/g));

console.log('<style> <styler> <style test="...">'.match(/<style(>|\s.*?>)/g));