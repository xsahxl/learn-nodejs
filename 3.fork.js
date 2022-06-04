const { spawn, fork } = require("child_process");
const path = require("path");

// fork 默认调用node命令，以及通过ipc进行通信
const cp = fork("fib.js", {
  cwd: path.resolve(__dirname, "./lib"),
});

cp.on("close", (code) => {
  console.log(`close子进程退出码：${code}`);
});

cp.on("error", (err) => {
  console.log(err);
});

cp.on("exit", (code) => {
  console.log(`exit子进程退出码：${code}`);
});

// ipc
cp.send("我是父进程");
cp.on("message", (data) => {
  console.log(`父进程接收到的数据：${data}`);
});
