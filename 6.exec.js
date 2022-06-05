const { exec } = require("child_process");
const path = require("path");

// execFile并没有衍生一个shell，所以不能用来执行shell命令，如果需要执行shell命令，可以使用exec。
const cp = exec(
  "echo $USER",
  {
    cwd: path.resolve(__dirname, "./lib"),
  },
  (err, stdout, stderr) => {
    console.log("stdout:", stdout);
  }
);

cp.on("exit", (code) => {
  console.log(`exit子进程退出码：${code}`);
});

cp.on("close", (code) => {
  console.log(`close子进程退出码：${code}`);
});

cp.on("error", (err) => {
  console.log("err:", err);
});
