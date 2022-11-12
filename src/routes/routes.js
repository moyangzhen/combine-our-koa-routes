
import combineRoutes from 'koa-combine-routers'
import demoRouter from './demoRouter'
import homeRouter from './homeRouter'
export default combineRoutes(demoRouter,homeRouter)