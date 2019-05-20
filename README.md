# vuecli3-project

## 一、关于本次搭建

> 使用vue-cli3 构建较完整的 vue2.x全家桶 + vuex 移动端H5项目

> 开发环境 macOS 10.13.2 ,nodejs v10.15.3 , npm 6.9.0

> 技术栈：vue2 + vuex2 + vue-router2 + axios + Vant + webpack + ES6 + less + eslint

```
# 项目拉取
git clone https://github.com/dinghuihua/vuecli3-project.git

# 进入项目根目录
cd vuecli3-project

# 安装依赖
npm install

# 开发环境编译和热加载
npm run serve

# 生产环境编译和压缩
npm run build

# 执行eslint检查并按配置eslint格式化文件
npm run lint

```

## 二、目录结构

```
packages
|- button
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  ├─ index.less  # 组件样式
|  └─ index.vue   # 组件入口
|
├─ index.js       # 所有组件入口
└─ index.less     # 所有组件样式
```

## 三、已完成如下：
1. px自动转化为rem，默认已配置为750px的设计稿为参考，可直接按设计稿的像素写px
2. 解决移动端300ms点击延迟
3. 引入Vant（移动端的vue组件库），你想要的都有，
[戳此进官网](https://youzan.github.io/vant/#/zh-CN/intro)

> 使用时，请按需使用，如 `import { Button, Cell } from 'vant'`  
示例：VantDemo.vue

4. 已配置路径别名，禁止使用 `../../xxx`这种方式引入路径，正确引入参考示例PathDemo.vue

## 四、开发编码相关约定



