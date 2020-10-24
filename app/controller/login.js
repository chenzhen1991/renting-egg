'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const { userName, password } = ctx.request.body;
    const result = [{ userName, password }];
    if (result.length > 0) {

      const token = '2344455566';

      ctx.set({ token });// 设置headers
      ctx.body = {
        code: '200',
        data: [{
          token,
          userName: result[0].userName,
          userId: result[0].userId,
        }],
        message: 'success',
      };

    } else {

      ctx.body = {
        code: '401',
        data: result,
        message: '账号或密码错误',
      };

    }
  }
}

module.exports = LoginController;
