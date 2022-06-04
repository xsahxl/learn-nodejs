const http = require("http");

// 斐波那契
function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

http
  .createServer(async (req, res) => {
    if (req.url === "/sum") {
      res.end(fib(45).toString());
    } else {
      return res.end("hello world");
    }
  })
  .listen(8000);
