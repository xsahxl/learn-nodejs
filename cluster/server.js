const http = require("http");

// http
//   .createServer((req, res) => {
//     if (Math.random() > 0.5) {
//       aa();
//     }
//     return res.end(`child process ${process.pid}\n`);
//   })
//   .listen(8000);

process.on("message", (msg, server) => {
  if (msg === "server") {
    http
      .createServer(async (req, res) => {
        return res.end(`child process ${process.pid}\n`);
      })
      .listen(server); // 多个进程监听同一个端口
  }
});
