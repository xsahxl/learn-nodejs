const { spawn } = require("child_process");
const path = require("path");

// 标准的输入，输出，错误信息
// [process.stdin, process.stdout, process.stderr] = [0, 1, 2];

const cp = spawn("node", ["fib.js"], {
  cwd: path.resolve(__dirname, "./lib"),
  // stdio: [0, 1, 2, "ipc"],
  //   stdio: "pipe",
  // stdio: "inherit",
  //   stdio: [0, 1, 2],
  //   stdio: [process.stdin, process.stdout, process.stderr],
});

cp.on("exit", (code) => {
  console.log(`exit子进程退出码：${code}`);
});

cp.on("close", (code) => {
  console.log(`close子进程退出码：${code}`);
});

cp.on("error", (err) => {
  console.log("err:", err);
});

// 流的方式
// cp.stdout.on("data", (data) => {
//   console.log(`父进程接收到的数据：${data.toString()}`);
// });
// cp.stdout.write("父进程发送数据");

// ipc
// cp.send("我是父进程");
// cp.on("message", (data) => {
//   console.log(`父进程接收到的数据：${data}`);
// });
