## npm ci

npm **ci**（**C**lean **I**nstall）

`npm ci`与`npm install`区别如下：

1. 项目必须有`package-lock.json`文件。

2. 如果某个依赖在`package.json`与`package-lock.json`之间的版本号不匹配，`npm ci`安装程序就会退出。

3. `npm ci`只能一次性安装整个项目，不能单独安装某个依赖。

4. 如果`node_modules`存在，则`npm ci`在安装之前会将`node_modules`全部删除。

5. `npm ci`不会修改`package.json`和`package-lock.json`文件。
