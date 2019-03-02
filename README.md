# 简书项目

## 运行
```
npm install   // yarn install

// dev
npm start     // yarn start

// build
npm run build   // yarn run build
```

## 目录
```$xslt

├─public                          // public 文件夹
  │  favicon.ico
  │  index.html
  │  manifest.json   
  │
  └─mock                          // 开发mock数据
          article1.json           // 详情页数据
          articleSum.json         // 首页文章摘要数据
          authorList.json         // 首页推荐作者数据
          homeInfo.json           // 首页其他数据
          moreAuthor.json         // 更多作者数据
          searchInfo.json         // 搜索条目数据
        
├─src       
  │  App.js                       // 项目总入口
  │  index.js                     // main函数
  │  style.js                     // 全局样式
  │
  ├─common                        // 公用组件
  │  └─header                     // 公用header组件
  │      │  index.js              // header组件
  │      │  style.js              // header 组件样式
  │      │
  │      └─store                  // header组件redux store
  │              actionCreator.js // header组件actionCreator
  │              constant.js      // header组件定义常量
  │              index.js         // header组件store入口以及export
  │              reducer.js       // header组件核心reducer
  │
  ├─static                        // 静态文件
  │  └─img
  │          banner1.png
  │          banner2.png
  │          banner3.png
  │          banner4.png
  │          banner5.png
  │          banner6.png
  │          logo.png
  │          qrcode.png
  │
  ├─store                       // 项目总store
  │      index.js               // react-redux 使用配置
  │      reducer.js             // reducer combineReducers
  │
  └─view                        // 页面组件
      ├─articleDetail           // 详情页面
      │  ├─component            // 文章详情页面组件
      │  │      index.js
      │  │      style.js
      │  │
      │  └─store                // 文章详情页面store
      │          actionCreator.js
      │          constant.js
      │          index.js
      │          reducer.js
      │
      └─home                    // home页面
          ├─component           // home页面组件
          │      articleItem.js // 文章摘要列表组件
          │      author.js      // 推荐作者列表页面
          │      index.js       // 入口页面
          │      menu.js        // 菜单组件
          │      style.js       // home页面样式
          │
          └─store               // home组件store
                  actionCreator.js
                  constant.js
                  index.js
                  reducer.js
```

## 技术栈
React + React-Redux + React-Router + styled-component + redux-immutable + redux-thunk + axios

查看package.json可知使用了哪些插件，针对于简书页面，很多都是不同不痒的插件，使用没有什么必要，单纯的就是为了给课程加点东西。



页面的开发主要按照自己的设计，一步一步还原，前端便是如此

## plugin

### React-Router
react路由解决方案，分为 `react-router-dom`和 `react-router-app`两个主要分支，包含 `react-router`，分别使用于不同的场景。

#### react-redux

#### react-transition-group

#### styled-component
react css解决方案

#### immutable
保证数据不会被修改，将store创建为一个immutable对象，通过get和set方法对store进行修改，避免了认为赋值的误操作。

immutable针对不同数据类型做了不同的处理，对应不同的API

## 总结

此课程核心部分在前六章关于react以及react-redux和相关开发插件的介绍上，关于后面的开发，学会如何拆分组件，并整合一起就好，把握住数据流向，课程中讲到的相关插件在以后大型项目中会用到。

