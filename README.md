<!--
 * @Author: Wanko
 * @Date: 2023-02-16 14:19:05
 * @LastEditors: Wanko
 * @LastEditTime: 2023-02-16 14:28:17
 * @Description: 
-->
# 基于rollup打包的库开发

## 食用说明

- 源码开发在src目录下，通过main.js导出库的名字
- 开发环境对源码的调试在examples目录下
  通过npm run server开启一个本地服务，此服务会监听src/main.js文件内容的变化，方便开发调试
- 库的生产环境调试
  通过npm run build 将src下的源码打包到dist文件下
  根目录index.html引入dist目录下iife或umd格式的