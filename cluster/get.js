const http = require("http");

setInterval(() => {
  http.get("http://localhost:8000", (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });
});
