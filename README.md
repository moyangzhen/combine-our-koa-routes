#运行脚本的两种情况
##1.运行的代码是es5的时候
###当运行的项目代码全部是es5的时候，也就是没有引入babel,可以用node '入口文件路径'

##2.运行的代码有es6及es6以上的代码的时候
###项目中引入了babel,设置了.bablerc,此时运行nodemon --exec babel-node '入口文件路径'，其中nodemon是一个可以实时的运行环境