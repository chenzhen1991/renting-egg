/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601113821417_8312';

  // add your middleware config here
  config.middleware = [];
  // egg 的默认安全系统，前后端不分离的情况下需要注意，每次在前端发送 post
  // 请求的时候必须读取一个 cookie 字段 : csrfToken 放在 header 请求头里面，
  // 每次请求的时候 egg 会帮我们验证一次，所以我们需要重新配置一下：

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
