const Controller = require('egg').Controller

class ListingController extends Controller {
  async find () {
    this.ctx.status = 200
    this.ctx.body = await this.ctx.model.Listing.find(this.ctx.request.body).populate('publisher', '-password')
  }

  async findById () {
    this.ctx.status = 200
    this.ctx.body = await this.ctx.model.Listing.findById(this.ctx.params.id).populate('publisher', '-password')
  }

  async create () {
    const user = await this.service.user.current()
    if (user) {
      const listing = new this.ctx.model.Listing({ ...this.ctx.request.body, publisher: user })
      await listing.save()
      this.ctx.status = 201
      this.ctx.body = { success: true }
    }
  }

  async update () {
    const user = await this.service.user.current()
    if (user) {
      const listing = await this.ctx.model.listing.findById(this.ctx.params.id)
      if (!listing) {
        this.ctx.status = 404
        return
      }
      if (listing.publisher._id !== this.user._id) {
        this.ctx.status = 403
        this.ctx.body = {
          code: 'access_violation',
          message: 'This user is not authorized to modify this listing.'
        }
        return
      }
      await listing.save()
      this.ctx.status = 201
      this.ctx.body = { success: true }
    }
  }

  async delete () {
    const user = await this.service.user.current()
    if (user) {
      const listing = await this.ctx.model.listing.findById(this.ctx.params.id)
      if (!listing) {
        this.ctx.status = 404
        return
      }
      if (listing.publisher._id !== this.user._id) {
        this.ctx.status = 403
        this.ctx.body = {
          code: 'access_violation',
          message: 'This user is not authorized to modify this listing.'
        }
        return
      }
      await this.ctx.model.Listing.deleteOne({ _id: this.ctx.request.body._id })
      this.ctx.status = 200
      this.ctx.body = { success: true }
    }
  }
}

module.exports = ListingController
