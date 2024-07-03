## main

`main`字段指定了加载的入口文件，`import 'moduleName'`就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。

## browser

`browser`指定该模板供浏览器使用的版本。

## module

设置 `ESM` 模块的入口路径。

## types / typings

设置 typescript 类型文件路径

## files

可选择的 files 字段，是一个文件匹配字符串。files包含的文件都会被上传至npm。

文件匹配采用的语法类似于 .gitignore 文件。忽略该字段，等价于 ["*"]，表示包含所有文件。

一些文件会永远被包含在包内：

- package.json
- README
- LICENSE / LICENCE
- "main" 字段指定的文件
- "bin" 字段指定的文件

一些文件会永远被排除在包外：

- \*.orig
- .\*.swp
- .DS_Store
- .\_\*
- .git
- .hg
- .lock-wscript
- .npmrc
- .svn
- .wafpickle-N
- CVS
- config.gypi
- node_modules
- npm-debug.log
- package-lock.json
- pnpm-lock.yaml
- yarn.lock

## sideEffects

类型：`boolean | path[]`。 默认值：`true`。

> true - 整个项目的模块都有副作用；false - 整个项目的模块都无副作用。

> 数组匹配的文件，都有副作用；数组支持：相对路径，绝对路径，还有 glob 模式。

sideEffects 就是为 tree shaking 服务的， 所以在打包某个模块之前，会先检查这个模块所属的 package.json 中的 sideEffects 标识，以此来判断这个模块是否有副作用，如果没有副作用的话，这些没用到的模块就不会被打包。
