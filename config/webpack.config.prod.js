const webpackMerge=require('webpack-merge')
const baseWebpackConfig=require('./webpack.config.base')
const TerserWebpackPlugin=require('terser-webpack-plugin')
const webpackConfig=webpackMerge(baseWebpackConfig,{
    mode:"production",
    stats:{
        children:false,
        warnings:false,
    },
    optimization:{
        minimizer:[
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings:false,
                    compress:{
                        drop_console:false,
                        dead_code:true,
                        drop_debugger:true,
                    },
                    output:{
                        comments:false,
                        beautify:false,
                    },
                    mangle:true
                  }
            })
        ],
        splitChunks: {
            cacheGroups: {
              commons: {
                name: 'commons',
                chunks: 'initial',
                minChunks: 3,
                enforce:true
              }
            }
          }
    }

})
module.exports=webpackConfig