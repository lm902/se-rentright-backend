'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.post('/user/login', controller.user.login)
  router.post('/user/logout', controller.user.logout)
  router.post('/user/register', controller.user.register)
  router.get('/user/current', controller.user.current)
  router.put('/user/current', controller.user.update)
  router.get('/listing', controller.listing.find)
  router.post('/listing', controller.listing.find)
  router.get('/listing/:id', controller.listing.findById)
  router.put('/listing/:id', controller.listing.update)
  router.delete('/listing/:id', controller.listing.delete)
}
