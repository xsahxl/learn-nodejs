# Node.js 多进程之间如何通信

- 由于 nodejs 是单线程的，如果遇到 cpu 密集请求的时候，比如有长时间运行的计算（大循环），就会阻塞后面所有的请求，这个时候就需要开启多进程。

## spawn

- [options.stdio](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html#optionsstdio)
  'pipe': equivalent to ['pipe', 'pipe', 'pipe'] (the default)
  'overlapped': equivalent to ['overlapped', 'overlapped', 'overlapped']
  'ignore': equivalent to ['ignore', 'ignore', 'ignore']
  'inherit': equivalent to ['inherit', 'inherit', 'inherit'] or [0, 1, 2]
