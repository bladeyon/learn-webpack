## 创建项目

> mkdir learn-webpack

> cd learn-webpack

> npm init -y

> 安装 webpack 依赖 npm i webpack webpack-cli -D

> 创建 webpack 配置文件: webpack.config.js

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

## 打包

> npx webpack --config webpack.config.js

> 配置 npm scripts 简化操作

    在 package.json 中配置 scripts

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production"
  },
```

现在就可以通过执行 `npm run build` 进行打包了

## 资源管理

### css

安装 css loader: npm i style-loader css-loader -D

在 webpack.config.js 配置 css 模块的加载器

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] // 必须按这个顺序
    }
  ];
}
```
