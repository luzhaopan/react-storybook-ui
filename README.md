# demo for Storybook by react

# Getting Started with Create React App

yarn start

# Add storybook

## create project by create-react-app

npx create-react-app project_name
cd project_name

## Add Storybook init

npx sb init

## run

yarn storybook or npm run storybook

## 目录结构

### 以下结构是初始化时自动生成的

├── .storybook
│ │── main.js //主文件
│ └── preview.js //预览设置文件
│
├─ src
│ └── stories
│ │ │── assets //静态资源文件夹
│ │ │── button.css //按钮样式文件
│ │ │── Button.jsx //按钮主文件
│ │ │── Button.stories.jsx //按钮文档页面
│ │ │── Introduction.stories.mdx //欢迎介绍页面，直接使用 mdx 文件,类似 Docz
│ │ └── .....

### 为了方便 UI 管理和使用习惯

在 src 下新建一个 compnents 文件夹，然后其中再以组件名文件夹分类，方便管理，如下：

├─ src
│ │──components
│ │ │── Button
│ │ │ │── index.jsx // 组件入口
│ │ │ │── button.css
│ │ │ │── Button.stories.tsx
│ │ │── Header
│ │ │ │── index.jsx // 组件入口
│ │ │ │── header.css
│ │ │ │── Header.stories.tsx
│ │ └── ... //参考上述文件夹
│ └── stories
│ │ │── assets //静态资源文件夹
│ │ │── Introduction.stories.mdx //欢迎介绍页面，直接使用 mdx 文件,类似 Docz
│ │ └── .....

### main.js

stories：用来描述你的故事相对于配置文件的位置，从默认的配置可以看出格式为'\*.stories.@(js|jsx|ts|tsx)';

添加 components 后，将匹配路径对应修改为"../src/components/\*_/_.stories.@(js|jsx|ts|tsx)",

addons: 用来描述你要引入的 storybook 插件。

webpackFinal：自定义 webpack 配置

### preview.js

主要是自定义左侧导航栏的顺序，还有一些页面元素的布局和样式引入。

### Component Story Format(CSF)

export default 定义了组件的相关配置，其中分别为：

title：导航栏层级，用'/'号分隔开，而且 title 不能重复；
component：组件实际元素；
argTypes：文档描述项，默认会显示组件 props 的入参项，也可以自定增加或者重写，具体配置下面详解。
