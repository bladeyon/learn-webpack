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

在 webpack.config.js 配置 css 文件的加载器

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

### 图片和字体

在 webpack.config.js 配置对图片、字体文件的处理

```js
// webpack.config.js
module: {
  rules: [
    // ...
    {
      test: /\.(png|jpg|svg)$/,
      type: 'asset/resource'
    },
    {
      test: /\.(woff|eot|ttf)$/,
      type: 'asset/resource'
    }
  ];
}
```

### 数据文件 xml、csv

在 webpack.config.js 配置对应文件的加载器进行处理

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.xml$/,
      use: ['xml-loader']
    },
    {
      test: /\.(csv|tsv)$/,
      use: ['csv-loader']
    }
  ];
}
```

### 类 json 文件

```json
// ./data.json
{
  "size": 5,
  "records": [{}]
}
```

```js
// 导入上面文件
import data from './data.json'; // 不会出错
// 导入部分文件
import { size } from './data.json'; // 报错
```

因为没有解析 json，所以会出错，可以通过配置解析处理方法

```js
// webpack.config.js
const json5 = require('json5');
const yaml = require('yaml');

module: {
  rules: [
    {
      test: /\.json5$/,
      type: 'json',
      parser: {
        parse: json5.parse
      }
    },
    {
      test: /\.yaml$/,
      type: 'json',
      parser: {
        parse: yaml.parse
      }
    }
  ];
}
```
