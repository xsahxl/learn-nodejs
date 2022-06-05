const { fork } = require("child_process");
const http = require("http");
const path = require("path");
const cpus = require("os").cpus();

console.log(cpus.length);

const server = http
  .createServer(async (req, res) => {
    return res.end("master\n");
  })
  .listen(8000);

for (let index = 0; index < cpus.length - 1; index++) {
  const cp = fork("server.js", {
    cwd: path.resolve(__dirname),
  });
  // 多个进程监听同一个端口
  cp.send("server", server);
}
