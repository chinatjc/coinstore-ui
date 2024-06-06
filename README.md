1. 还需要对vscode 的语言配置（格式化，onSave等）进行研究。
2. 还需要对eslint的vscode配置，进行研究。


---

tsconfig.json - references：

1. tsconfig.json 范围内的文件 引入 tsconfig.node.json 范围内的文件，需要后者提供 x.d.tx 类型文件。
2. 而 typescript-eslint 在进行类型校验时，tsconfig.json 还未打包，所以 tsconfig.node.json 范围的文件没有 类型文件。
3. 所以就出现了 “该文件在 eslint 范围内，不在 tsconfig 范围内” 的报错。

需要对 tsconfig.json 和 tsconfig.node.json 的打包
