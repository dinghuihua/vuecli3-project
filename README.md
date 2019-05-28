# vuecli3-project

## 一、关于本次搭建

> 使用vue-cli3 构建较完整的 vue2.x全家桶 + vuex 移动端H5项目

> 开发环境 macOS 10.13.2 ,nodejs v10.15.3 , npm 6.9.0

> 技术栈：vue2 + vuex3 + vue-router3 + axios + Vant + webpack + ES6 + less + eslint

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
|- api  # 请求相关目录
|   ├─ api.js   # 整站api
|   └─ http.js  # asios请求拦截封装
|
|- util  # 公共辅助功能性js目录
|   ├─ common.js    # 公共js函数
|   ├─ filters.js   # 全局过滤器
|   └─ mixin.js     # 公共mixin
|
|- components   # 存放公共组件目录
|
|- views        # 存放页面级视图组件目录
|   └─ index/    # 模块目录  
|       ├─ child/   # 模块的私有子组件目录
|       |    └─ list.vue  # --- 专属该模块的私有组件
|       ├─ less/    # 模块的私有样式目录
|       |    └─ index.less  # --- 当样式过长的时候抽离为单独样式
|       └─ index.vue   
| 
|- router # 存放路由目录
|   ├─ index.js    # 主入口
|   └─ page.js     # 其他页面路由
|
|- store   # vuex仓库目录
|  ├─ index.js    # vuex入口文件
|  ├─ state.js    # 存放状态变量（响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新）
|  ├─ mutation_types.js    # 使用常量替代 Mutation 事件类型，方便查看整个项目的mutation
|  ├─ mutations.js # 定义更改state的同步函数
|  ├─ getters.js   # 可以对 state 进行计算操作，它就是 store 的计算属性
|  └─ actions.js   # 提交mutation，可包含异步操作
|
├─ vue.config.js  # vue-cli3中，@vue/cli-service会自动读取该自定义配置文件 
├─ babel.config.js
├─ .editorconfig  # 编写风格配置
├─ .gitignore     # git忽略文件
├─ .eslintrc.js   # ESLint标准配置
├─ package.json   # 依赖
├─ postcss.config.js  # 预处理配置
├─ .env            # 开发/测试环境接口前缀配置
├─ .env.production # 生产环境接口前缀配置
└─ README.md       # 开发须知

```

## 三、已完成的配置、功能及相关说明 

1. px自动转为rem，编写样式直接以px为单位。

   默认按750px的设计稿为基准，可在`postcss.config.js`中修改

2. 引入全局的less的mixin(使用全局less变量)，请在`global.less`中编写

3. 已配置axios、assets、components、views目录的路径别名，可直接使用,更加方便的引入了

4. 已引入Vant（移动端的vue组件库），直接 `import { XXX } from 'vant'` 导入组件，完成按需加载
[戳此进官网](https://youzan.github.io/vant/#/zh-CN/intro)

5. 引入vuex状态管理

组件中使用示例：

`import { mapState, mapGetters,mapActions,mapMutations } from 'vuex'`     

```js
export default {
  computed: {
      ...mapGetters([
        'showFooter'
      ])
  },
  methods:{
    testMethod(){
       // 可调用 Mutations 改变state状态了
       let data = '测试'
       this.TEST(data)
    },
    ...mapMutations([
       'TEST'
    ])
  }
}
```
6. 生产环境（上线后）自动清除所有`console`打印的代码【待测试】

7. axios封装
    * http.js 公共参数配置 、接口报错统一处理
    * api.js  整站api
    * 已挂载到全局，使用方式：this.API.XXX()
    

8. 路由设计、登录拦截
  
   *  页面级别的路由拦截：
        
        将需要强登录才可进入的页面路由中 meta 加上 属性auth: true
   
   *  事件级登录判断：请使用vuex getter的loginStatus进行判断【true/false】
   
   *  如需缓存当前组件，可在meta中设置keepAlive: true
    
    (即：浏览器回退时，不刷新不重新加载，能回到上个页面上次滚动到的位置)

9. 其他
    * 注入全局过滤器
    
        使用示例：`{{1555851774 | formatTimer()}}`
        
    * minxin：组件间的公共代码快/方法的抽取，按需import 
    
    * 全局Toast提示，使用：
    ```
        this.$toast({
          mask: true,
          message: '网络请求不存在'
        })
    ```

## 待完成
* 微信分享的封装 
* 全局loading


## 四、开发编码相关约定

1. 关于路径
    * router可按业务进行模块划分为独立文件，再导入index使用
    * `<img>`的src路径、背景图url请使用`~`相对于assets目录引入。禁止使用 `../../xxx`这种方式
    * 导入组件的路径请使用别名components导入，配置见`vue.config.js`
    * ⚠️️如果使用cdn，请建立与assets对应的目录名及文件名，设置一个全局cdn前缀变量（less和vue），统一管理使用
       
2. 关于命名
    * 目录使用`pascalCase`驼峰式命名
    * 组件命名统一使用 `PascalCase` 首字母大写驼峰式
    
3. 关于样式
    * 统一使用less编写样式
    * 使用px为单位即可
    * 使用minxin抽取公共颜色变量、重复的代码块，写在global.less中
    
4. 提交代码前 必须先解决eslint的警告和报错

5. 两个及以上的页面用到相同的组件或功能，应考虑是否封装，是否使用mixin，避免代码重复copy

6. 编码风格 - 推荐的书写顺序
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

# 更多编码规范
See [Vue官方风格指南](https://cn.vuejs.org/v2/style-guide/)

See [Vue.js 组件编码规范](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-CN.md)

