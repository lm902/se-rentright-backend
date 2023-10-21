const crypto = require('crypto')
const Service = require('egg').Service

class UserService extends Service {
  async find (username, password) {
    const user = await this.ctx.model.User.findOne({ username, password })
    return user
  }

  async login (username, plainTextPassword) {
    const password = this.derivePassword(plainTextPassword)
    const user = await this.find(username, password)
    if (user) {
      this.ctx.session.user = user
      return user
    }
  }

  logout () {
    delete this.ctx.session.user
  }

  async register (username, plainTextPassword) {
    const user = await this.ctx.model.User.findOne({ username })
    if (!user) {
      const password = this.derivePassword(plainTextPassword)
      const newUser = new this.ctx.model.User({ username, password })
      await newUser.save()
      this.ctx.session.user = newUser
      return newUser
    }
  }

  async current () {
    const user = this.ctx.session.user
    const { username, password } = user
    if (user) {
      const newUser = await this.ctx.model.User.findOne({ username, password })
      newUser.password = null
      return newUser
    } else {
      this.ctx.status = 403
      this.ctx.body = {
        code: 'login_required',
        message: 'This action requires a valid login session.'
      }
    }
  }

  derivePassword (plainTextPassword) {
    return crypto.pbkdf2Sync(plainTextPassword, this.config.keys, 600000, 256, 'sm3')
  }
}

module.exports = UserService
