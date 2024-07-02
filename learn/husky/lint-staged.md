lint-staged 是只针对`git暂存文件`执行命令（lint）的工具。避免了每次 `git commit` 之前，对整个项目进行 `lint` 。

## 安装

```bash
npm install --save-dev lint-staged
```

## 创建配置文件

针对 `ESM` 模块系统，可以创建配置文件 `lint-staged.config.mjs` 。

lint-staged.config.mjs

- `key` - 文件范围
- `value` - 执行命令

```js
export default {
  '*': 'npm run prettier-check',
  '*.{ts,tsx,js,mjs,jsx}': 'npm run lint',
};
```

[配置文件示例](https://www.npmjs.com/package/lint-staged#lintstagedrc-example)

## 执行 lint-staged

为了能让`lint-staged`在`git commit`之前执行，需要在`pre-commit`文件中添加相关命令：

.husky/pre-commit

```bash
npx --no-install lint-staged
```

## 底层逻辑

`lint-staged` 会解析出git暂存区中文件的绝对路径列表，在过滤绝对路径后（符合文件范围），将这些路径传递给相关的命令。

例如：

git暂存区文件：`/project/a.js`、`/project/b.js`

lint-staged.config.mjs：

```js
export default {
  '*': 'npm run prettier-check',
};
```

lint-staged 底层执行：

```bash
npm run prettier-check /project/a.js,/project/b.js
```

## 注意事项

### 在 lint-staged 命令执行过程中，产生了代码修改，怎么处理

`lint-staged` 会自动添加这些代码修改到`git`的暂存区。

### tsc 命令无法正常使用

按照[官方文档](https://www.npmjs.com/package/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments)的介绍使用`tsc`对`staged`中的文件进行类型检查，`tsc`命令无法正常执行。

因为`tsc`命令中传递参数时，会忽略`tsconfig.json`文件中的配置。所以会报错：

```bash
Option 'project' cannot be mixed with source files on a command line.
```

解决方案：在`pre-commit`中添加`tsc`命令，对整个项目进行类型检查。

```bash
npm run tsc-all
npx --no-install lint-staged
```
