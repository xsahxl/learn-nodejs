function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// 流的方式
// console.log(`子进程${process.pid}输出: ${fib(10)}`);
// process.stdout.on("data", (data) => {
//   console.log(`子进程接收到的数据：${data.toString()}`);
// });

// ipc
process.on("message", (data) => {
  console.log(`子进程接收到的数据：${data}`);
});
process.send("我是子进程");
