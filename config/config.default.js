/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = module.exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = '2cabe905-4cd6-414f-be86-3717277856f4'

  // add your middleware config here
  config.middleware = []

  config.mongoose = {
    url: 'mongodb://localhost:27017/rentright',
    options: {},
    plugins: []
  }

  config.security = {
    csrf: {
      ignore: ctx => ctx.request.header['x-requested-with'] === 'XMLHttpRequest'
    }
  }

  // add your user config here
  const userConfig = {
  }

  return {
    ...config,
    ...userConfig
  }
}
