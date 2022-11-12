import Router from 'koa-router'
const router=new Router();
import HomeController from '../api/HomeController';
router.get('/home',HomeController.getHomeData)
export default router