// 想像這裡有隱藏程式碼
// # var module = new Module(...);
// # var exports = module.exports;
// index.js 在 call "require("./ModuleB");"
// 等於回傳 module.exports
var name = "Daniel";
exports.name = name;