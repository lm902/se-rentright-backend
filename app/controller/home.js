'use strict'

const { Controller } = require('egg')

class HomeController extends Controller {
  async index () {
    const { ctx } = this
    ctx.body = 'RentRight Backend Service is operating.'
  }
}

module.exports = HomeController
