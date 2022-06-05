const { spawn } = require("child_process");
const path = require("path");

// 将options.detached设置为true可以使子进程在父进程退出后继续运行。
const cp = spawn("node", ["writefile.js"], {
  cwd: path.resolve(__dirname, "../lib"),
  detached: true,
  stdio: "ignore",
});

// 默认情况下，父进程将等待分离的子进程退出.
// subprocess.unref()方法 允许父进程独立于子进程退出，除非子进程和父进程之间建立了IPC通道。
cp.unref();

cp.on("exit", (code) => {
  console.log(`exit子进程退出码：${code}`);
});

cp.on("close", (code) => {
  console.log(`close子进程退出码：${code}`);
});

cp.on("error", (err) => {
  console.log("err:", err);
});
