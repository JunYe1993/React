// 要在 package.json 加 type: module
// 才能達到 <script src="./function.js" type="module"></script> 的效果
// 這邊不知道為什麼要加 .js 才給過
import { intro } from "./function.js";
import { _name, _number } from "./studentA.js";
intro(_name, _number);