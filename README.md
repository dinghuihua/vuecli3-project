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
npm run lint --format

```

## 二、主要目录结构

```
public
├─ favicon.ico   # 网站图标
└─ index.html    # 入口页面
|
src
|- assets  # 静态资源目录
|  ├─ images      # 本地图片
|  └─ styles      # 公共样式
|      ├─ index.less  # 公共样式导入入口
|      ├─ base.less   # 基础样式和公共样式
|      └─ icon.less   # 整站所有小图标图片都需要抽离至此处统一管理，统一以 icon-XXX 进行命名
|- components   # 存放公共组件目录
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  ├─ index.less  # 组件样式
|  └─ index.vue   # 组件入口
|- views        # 存放页面级视图组件目录
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  ├─ index.less  # 组件样式
|  └─ index.vue   # 组件入口
|- router       # 存放路由目录
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  ├─ index.less  # 组件样式
|  └─ index.vue   # 组件入口
|- store        # vuex仓库目录
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  ├─ index.less  # 组件样式
|  └─ index.vue   # 组件入口
|
├─ vue.config.js  # vue-cli3中，@vue/cli-service会自动读取该自定义配置文件 
├─ babel.config.js
├─ .eslintrc.js   # ESLint标准配置
├─ package.json   # 依赖
├─ postcss.config.js
└─ README.md      # 开发须知

```

## 三、本次搭建已完成 ：

1. px自动转化为rem，默认已配置为750px的设计稿为参考，可直接按设计稿以px为单位写样式

2. 解决移动端300ms点击延迟

3. 引入Vant（移动端的vue组件库），你想要的都有，使用时可直接`import`导入组件，按需加载
[戳此进官网](https://youzan.github.io/vant/#/zh-CN/intro)

4. 已配置assets、components、views路径别名，禁止使用 `../../xxx`这种方式引入路径，正确引入参考示例PathDemo.vue

5. 引入vuex状态管理


## 四、开发编码相关约定

1. 关于路径
    * router可按业务进行模块划分为独立文件，再导入index使用
    * `<img>`的src路径、背景图url请使用`~`相对于assets目录引入。禁止使用 `../../xxx`这种方式
    * 导入组件的路径请使用别名components导入，配置见`vue.config.js`
    * 如果使用cdn，请建立与assets对应的目录名及文件名，设置一个全局cdn前缀变量，统一管理使用
    
    
2. 关于命名
    * 目录使用`pascalCase`驼峰式命名
    * 组件命名统一使用 `PascalCase` 首字母大写驼峰式
    
3. 关于样式
    
    * 统一使用less编写样式
    * 使用px为单位即可
    * 使用minxin抽取公共样式
    * 抽取公共颜色变量


