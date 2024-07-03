# npx

运行本地的命令；如果在本地未发现命令，则加载远端npm包，然后运行相关命令。

## --no / --no-install （还是有一些疑问）

如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no参数

```bash
npx --no http-server
```

> `--no-install` 已经废弃了，使用 `--no` 替换。

## --

在 `npx` 命令中，`--`命令之前的参数都是`npx`的，之后的参数都是`command`的。

例如：

```bash
npx --on -- tap --bail test/foo.js
```

分成两部分：

```bash
npx --inspect
```

```bash
tap --bail test/foo.js
```
