const Router=require('koa-router')
const a=require('../api/a')
const router=new Router()
router.get('/a',a.a)
module.exports=router