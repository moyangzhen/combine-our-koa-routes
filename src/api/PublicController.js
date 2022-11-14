import svgCaptcha from "svg-captcha";
class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1i",
      color: true,
      noise: Math.floor(Math.random() * 5),
      height: 38,
      width: 150,
    });
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    };
  }
}
export default new PublicController();
