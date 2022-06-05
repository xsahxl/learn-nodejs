# Node.js 多进程之间如何通信

- 由于 nodejs 是单线程的，如果遇到 cpu 密集请求的时候，比如有长时间运行的计算（大循环等），就会阻塞后面所有的请求，这个时候就需要开启多进程。
- [example](./1.http-server.js)

## spawn

- [options.stdio](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html#optionsstdio)
  - 'pipe': equivalent to ['pipe', 'pipe', 'pipe'] (the default)
  - 'overlapped': equivalent to ['overlapped', 'overlapped', 'overlapped']
  - 'ignore': equivalent to ['ignore', 'ignore', 'ignore']
  - 'inherit': equivalent to ['inherit', 'inherit', 'inherit']

## fork

- 默认调用 node 命令，通过 ipc 进行通信

## daemon 进程

- [options.detached](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html#optionsdetached)
  - 将 options.detached 设置为 true 可以使子进程在父进程退出后继续运行。
  - 默认情况下，父进程将等待分离的子进程退出.
  - subprocess.unref()方法 允许父进程独立于子进程退出，除非子进程和父进程之间建立了 IPC 通道。

## execFile
