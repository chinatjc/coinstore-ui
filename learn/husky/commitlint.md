commitlint 用来检查 git-commit-message 是否符合固定的要求。

## 安装

```bash
npm install --save-dev @commitlint/{cli,config-conventional}
```

## 创建配置文件

commitlint.config.ts

```ts
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
};

export default Configuration;
```

## 配置 git hooks

为了能让`commitlint`在`git commit -m`执行时对 message 进行校验，需要在`commit-msg`文件中添加相关命令：

```bash
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

## 使用 @commitlint/prompt-cli 生成 git-commit-message

除了常规的 `git commit -m 'xxx'` 提交之外，还可以通过命令行工具，交互式地创建 `git-commit-message` 。

安装依赖：

```bash
npm i @commitlint/prompt-cli -D
```

通过交互式命令，提交 `git-commit-message`：

```bash
npx commit

Please enter a type: [required] [tab-completion] [header]
<type> holds information about the goal of a change.

<type>(<scope>): <subject>
<body>
<footer>

? type: feat
Please enter a scope: [optional] [header]
<scope> marks which sub-component of the project is affected

feat(<scope>): <subject>
<body>
<footer>

? scope:
Please enter a subject: [required] [header]
<subject> is a short, high-level description of the change

feat: <subject>
<body>
<footer>
```

## npx --no -- commitlint --edit \$1 命令解读

1. --edit

从指定的文件读取最后的提交信息，或者回推到`./.git/COMMIT_EDITMSG`文件。

2. $1

在`commit-msg hooks`中，`$1`指向`.git/COMMIT_EDITMSG`文件，可以通过`$1`拿到`git commit -m 'xxx'`中`xxx`的信息。

[commitlint-cli](https://commitlint.js.org/reference/cli.html)

## git-commit-message 信息详情

- type 指当前 commit 类型

- scope 指 commit 的范围（哪些模块进行了修改）

- subject 指 commit 的简短描述

- body 指 commit 主体内容（更详细的说明，可以分成多行）

- footer 提供一些与提交信息不直接相关的信息，可以分成多行

type 可选类型：

| 类型     |                                         描述                                         |
| :------- | :----------------------------------------------------------------------------------: |
| build    |        主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交         |
| ci       |   主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交    |
| docs     |                                       文档更新                                       |
| feat     |                                       新增功能                                       |
| merge    |                             分支合并 Merge branch ? of ?                             |
| fix      |                                       bug 修复                                       |
| perf     |                                    性能, 体验优化                                    |
| refactor |                       重构代码(既没有新增功能，也没有修复 bug)                       |
| style    | 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑) |
| test     |                             新增测试用例或是更新现有测试                             |
| revert   |                                回滚某个更早之前的提交                                |
| chore    |                               不属于以上类型的其他类型                               |

### 重大修改

当仓库产生比较重大的修改时，例如删除了某个 API，或者改变了大量的 API，可以通过一下两种方式来表示：

#### type!

在提交信息的 type 后面添加 ! 符号，表示该提交是重大更改。

```bash
feat!: 新增了新的 API，移除了旧的 API
```

> type 可以是可选枚举值的任意一个。

#### BREAKING CHANGE

在提交信息的 body 中添加 BREAKING CHANGE，表示该提交是重大更改。

```bash
feat: 新增了新的 API

BREAKING CHANGE: 移除了旧的 API
```
