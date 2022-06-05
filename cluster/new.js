const cluster = require("cluster");
const http = require("http");
const path = require("path");
const cpus = require("os").cpus();

// if (cluster.isMaster) {
//   cpus.forEach(() => {
//     cluster.fork();
//   });
// } else {
//   http
//     .createServer((req, res) => {
//       return res.end(`child process ${process.pid}\n`);
//     })
//     .listen(8000);
// }

cluster.setupMaster({
  exec: path.resolve(__dirname, "./server.js"),
});

for (let index = 0; index < cpus.length; index++) {
  cluster.fork();
}

// 守护进程
cluster.on("exit", (worker, code, signal) => {
  console.log(`worker ${worker.process.pid} died`);
  cluster.fork();
});
