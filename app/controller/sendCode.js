const Controller = require('egg').Controller;

class SendCodeController extends Controller {
  async index() {
    const { ctx } = this;
    const { email } = ctx.request.body;
    if (email) {
      ctx.body = {
        code: '200',
        data: [{
          code: '1234',
        }],
        message: 'success',
      };
    } else {
      ctx.body = {
        code: '401',
        message: '账号或密码错误',
      };
    }
  }

}

module.exports = SendCodeController;
