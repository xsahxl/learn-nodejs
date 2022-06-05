const fs = require("fs");

setInterval(() => {
  fs.appendFileSync("hi.txt", "hello world\n");
}, 1000);
