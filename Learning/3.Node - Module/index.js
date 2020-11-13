// 執行這段 code 要將 package.json 裡的 type: module 消掉
var a = require("./moduleA");
var b = require("./moduleB");
console.log(a.name + " and " + b.name + " both are the best");