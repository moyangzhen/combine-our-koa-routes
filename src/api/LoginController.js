import send from "../config/MailConfig";
import moment from "moment";
class LoginController {
  constructor() {}
  async forget(ctx) {
    const { body } = ctx.request;
    console.log(body);
    try {
      //body.username->database->email
      let result = await send({
        code: "1234",
        expire: moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss"),
        email: body.username,
        user: "ludaohua",
      });
      ctx.body = {
        code: 200,
        data: result,
        msg: "邮件发送成功",
      };
    } catch (e) {
      console.log(e);
    }
  }
  async login(ctx) {
    //接受用户的数据
    //验证图片验证码的时效性，正确性
    //验证用户账号的密码是否正确
    //返回token
    console.log("hello login");
  }
  async regist(ctx) {}
}
export default new LoginController();
