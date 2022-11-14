import combineRoutes from "koa-combine-routers";
import publicRouter from "./publicRouter";
import loginRouter from "./LoginRouter";
export default combineRoutes(publicRouter, loginRouter);
