import koa from "koa";
import JWT from "koa-jwt";
import path from "path";
import koaBody from "koa-body";
import jsonutil from "koa-json";
import compose from "koa-compose";
import cors from "koa2-cors";
import router from "./routes/routes";
import helmet from "koa-helmet";
import statics from "koa-static";
import compress from "koa-compress";
import config from "./config/index";
import errorHandle from "./common/ErrorHandle";
const app = new koa();
const isDevMode = process.env.NODE_ENV == "production" ? false : true;
// 定义公共路径，不需要jwt鉴权
const jwt = JWT({ secret: config.JWT_SECRET }).unless({
  path: [/^\/public/, /\/login/],
});
const middleware = compose([
  koaBody({
    multipart: true,
  }),
  statics(path.join(__dirname, "../public")),
  cors(),
  jsonutil({ pretty: false, param: "pretty" }),
  helmet(),
  errorHandle,
  jwt,
]);
if (!isDevMode) {
  app.use(compress());
}
app.use(middleware);
app.use(router());
app.listen(3000);
