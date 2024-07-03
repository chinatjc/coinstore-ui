## --

在 `npm exec` 命令中，`--`命令之前的参数都是`npm exec`的，之后的参数都是`command`的。

例如：

```bash
npm exec --inspect -- tap --bail test/foo.js
```

分成两部分：

```bash
npm exec --inspect
```

```bash
tap --bail test/foo.js
```
