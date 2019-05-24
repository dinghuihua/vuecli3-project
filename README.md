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
|      ├─ global.less # 全局less变量、mixin 
|      ├─ base.less   # 基础样式和公共样式
|      └─ icon.less   # 整站所有小图标图片都需要抽离至此处统一管理，统一以 icon-XXX 进行命名
|
|- components   # 存放公共组件目录
|
|- views        # 存放页面级视图组件目录
|  └─ index/    # 模块目录  
|       ├─ child/   # 模块的私有子组件目录
|       |    └─ list.vue  # --- 专属该模块的私有组件
|       ├─ less/    # 模块的私有样式目录
|       |    └─ index.less  # --- 当样式过长的时候抽离为单独样式
|       └─ index.vue   
| 
|- router       # 存放路由目录
|  ├─ index.js    # 主入口
|  └─ page.js     # 其他页面路由
|
|- store        # vuex仓库目录
|  ├─ index.js    # vuex入口文件
|  ├─ state.js    # 存放状态变量（响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新）
|  ├─ mutation_types.js    # 使用常量替代 Mutation 事件类型，方便查看整个项目的mutation
|  ├─ mutations.js    # 定义更改state的同步函数
|  ├─ getters.js  # 可以对 state 进行计算操作，它就是 store 的计算属性
|  └─ actions.js   # 提交mutation，可包含异步操作
|
├─ vue.config.js  # vue-cli3中，@vue/cli-service会自动读取该自定义配置文件 
├─ babel.config.js
├─ .eslintrc.js   # ESLint标准配置
├─ package.json   # 依赖
├─ postcss.config.js  # 预处理配置
└─ README.md      # 开发须知

```

## 三、已完成的配置、功能及相关说明 

1. px自动转为rem，编写样式直接以px为单位。

   默认按750px的设计稿为基准，可在`postcss.config.js`中修改

2. 引入全局的less的mixin(使用全局less变量)，请在`global.less`中编写

3. 已配置assets、components、views目录的路径别名，可直接使用

   禁止使用 `../../xxx`这种路径引入文件

4. 已引入Vant（移动端的vue组件库），直接 `import { XXX } from 'vant'` 导入组件，完成按需加载
[戳此进官网](https://youzan.github.io/vant/#/zh-CN/intro)

5. 引入vuex状态管理

6. 生产环境自动删除`console`相关代码


--
-- 解决移动端300ms点击延迟


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


```
<template>
  <div class="home">
    <h1>书写顺序演示</h1>
    <p>组件选项应该有统一的顺序。</p>
    <p>标签的 Props 应该有统一的顺序，依次为指令、属性和事件。</p>
    <div
      v-if="true"
      v-show="show"
      v-model="value"
      v-for=""
      ref="ref"
      :key="key"
      :text="text"
      @input="onInput"
      @change="onChange"
    ></div>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () {},

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {}
}
</script>
<style lang="less" src="./less/xxx.less" scoped></style>
```