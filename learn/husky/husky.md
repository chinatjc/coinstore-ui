Husky 是一个 Git 钩子工具，用于在不同的 Git 操作（例如：提交和推送）前自动运行脚本。比如：类型检查、代码检查、代码格式检查等等。

## 安装

```bash
npm install --save-dev husky
```

## husky 初始化

```bash
npx husky init
```

## 结果

### package.json

在 `package.json - scripts` 文件中新增命令 `"prepare": "husky"` 。

### 新增目录和文件

新增了 .husky 目录。包含一个 `pre-commit` 文件，里面包含一些在 `git commit` 操作之前需要执行的命令。

```bash
npx --no-install lint-staged
```

> `pre-commit` 文件里的命令，按照从上到下的顺序执行；当某个命令执行失败，则剩余待执行的命令都不会执行。
