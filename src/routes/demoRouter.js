
import Router  from 'koa-router'
import demoController from '../api/DemoController'
import homeController from '../api/HomeController'
const router=new Router()
router.get('/demo',demoController.demo)
router.get('/home',homeController.getHomeData)
export default router