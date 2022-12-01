import Router from "koa-router";
import LoginController from "../api/LoginController";
import loginController from "../api/LoginController";
const router = new Router();
router.prefix("/login");
router.post("/forget", loginController.forget);
router.post("/login", LoginController.login);
router.post("/regist", loginController.regist);
export default router;
