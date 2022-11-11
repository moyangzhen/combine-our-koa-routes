#
运行脚本的两种情况
##
1.运行的代码是es5的时候
###
当运行的项目代码全部是es5的时候，也就是没有引入babel,可以用node '入口文件路径'

##
2.运行的代码有es6及es6以上的代码的时候
###
项目中引入了babel,设置了.bablerc,此时运行nodemon --exec babel-node '入口文件路径'，其中nodemon是一个可以实时的运行环境

##调试webpack的方法
### 
1.console.log()
### 
2.npx node --inspect-brk ./node_modules/.bin/webpack 因为webpack是commonjs的规范
### 
./node_modules/.bin/webpack --progress可以看到执行的过程,在webpackconfig之前打一个断点，在export前console.log一下，chrome浏览器导航栏中输入chrome://inspect/#devices 点击inspect弹出,点击运行，然后到控制台可以看到基本的配置
###
3.在vscode中添加launch.json,点击vscode左侧三角小虫子按钮，add configuration添加一个脚本，输入nodemon,弹出提示，点击nodemon进行配置