const Controller = require('egg').Controller

class UserController extends Controller {
  #userLoginRules = {
    email: 'string',
    password: 'password'
  }

  async login () {
    this.ctx.validate(this.#userLoginRules)
    const { email, password } = this.ctx.request.body
    const user = await this.service.user.login(email, password)
    if (user) {
      this.ctx.body = { success: true, user }
    } else {
      this.ctx.status = 403
      this.ctx.body = { code: 'login_failure', message: 'Incorrect email or password.' }
    }
  }

  async register () {
    this.ctx.validate(this.#userLoginRules)
    const { email, username, password } = this.ctx.request.body
    const result = await this.service.user.register(email, username, password)
    if (result.code) this.ctx.status = 403
    this.ctx.body = result
  }

  logout () {
    this.service.user.logout()
    this.ctx.body = { success: true }
  }

  async current () {
    const user = await this.service.user.current()
    if (user) {
      this.ctx.body = { success: true, user }
    }
  }

  async update () {
    const user = await this.service.user.current()
    await this.ctx.model.user.updateOne({ _id: user._id }, this.ctx.request.body)
    this.ctx.body = await this.service.user.current()
  }
}

module.exports = UserController
