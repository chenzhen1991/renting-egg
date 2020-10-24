const Controller = require('egg').Controller;
class ResetPsw extends Controller {
  async index() {
    const { ctx } = this;
    const { resetCode, newPws, confirmPws } = ctx.request.body;
    if (resetCode) {
      if (newPws === confirmPws) {
        ctx.body = {
          code: '200',
          message: '密码设置成功',
        };
      } else {
        ctx.body = {
          code: '401',
          message: '新密码与确认密码不一致',
        };
      }
    } else {
      ctx.body = {
        code: '401',
        message: '请填写重置代码',
      };
    }
  }
}
module.exports = ResetPsw;
