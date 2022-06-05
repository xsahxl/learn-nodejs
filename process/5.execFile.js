const { execFile } = require("child_process");
const path = require("path");

const cp = execFile(
  "node",
  ["execFileWorker.js"],
  {
    cwd: path.resolve(__dirname, "./lib"),
  },
  (err, stdout, stderr) => {
    // 这里会输出子进程的全部输出，但子进程输出数据比较大的时候，我们也不可能无限制的让它输出，这样可能会导致内存溢出，所以会有maxBuffer的参数进行限制(1048576)。
    console.log("stdout:", stdout);
  }
);

// const cp = execFile(
//   "ls",
//   ["-lh"],
//   {
//     cwd: path.resolve(__dirname, "../lib"),
//   },
//   (err, stdout, stderr) => {
//     console.log("stdout:", stdout);
//   }
// );

cp.on("exit", (code) => {
  console.log(`exit子进程退出码：${code}`);
});

cp.on("close", (code) => {
  console.log(`close子进程退出码：${code}`);
});

cp.on("error", (err) => {
  console.log("err:", err);
});
