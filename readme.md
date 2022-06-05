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

## execFile and exec

- 输出子进程的全部输出，但子进程输出数据比较大的时候，我们也不可能无限制的让它输出，这样可能会导致内存溢出，所以会有 maxBuffer 的参数进行限制(1048576)。
- execFile 并没有衍生一个 shell，所以不能用来执行 shell 命令，如果需要执行 shell 命令，可以使用 exec。

## cluster

- 多个进程里开启同一个服务，充分使用多核 CPU ，实现负载均衡的一个效果

---

> 插件推荐： GitHub Copilot
