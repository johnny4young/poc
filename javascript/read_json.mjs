import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./file-export.json");
console.log(data)