const Controller = require('egg').Controller

class UserController extends Controller {
  #userRules = {
    username: 'string',
    password: 'password'
  }

  async login () {
    this.ctx.validate(this.#userRules)
    const { username, password } = this.ctx.request.body
    const user = await this.service.user.login(username, password)
    if (user) {
      this.ctx.status = 200
      this.ctx.body = { success: true }
    } else {
      this.ctx.status = 403
      this.ctx.body = { success: false }
    }
  }

  async register () {
    this.ctx.validate(this.#userRules)
    const { username, password } = this.ctx.request.body
    const user = await this.service.user.register(username, password)
    if (user) {
      this.ctx.status = 200
      this.ctx.body = { success: true }
    } else {
      this.ctx.status = 403
      this.ctx.body = { success: false }
    }
  }

  logout () {
    this.service.user.logout()
    this.ctx.status = 200
    this.ctx.body = { success: true }
  }

  async current () {
    const user = await this.service.user.current()
    if (user) {
      this.ctx.status = 200
      this.ctx.body = { success: true, user }
    } else {
      this.ctx.status = 404
      this.ctx.body = { success: false }
    }
  }
}

module.exports = UserController
