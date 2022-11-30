import svgCaptcha from "svg-captcha";
import { getValue, setValue } from "../config/RedisConfig";
class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const body = ctx.request.query;
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1i",
      color: true,
      noise: Math.floor(Math.random() * 5),
      height: 38,
      width: 150,
    });
    // 保存图片验证码数据，设置超时时间单位是秒
    //设置图片验证码超时十分钟
    setValue(body.sid, newCaptcha.text, 10 * 60);

    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    };
  }
}
export default new PublicController();
