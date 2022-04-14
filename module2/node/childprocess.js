let val=require('child_process');
// val.execFileSync('calc');

let content=val.execSync("node test.js");
console.log("hello"+content);