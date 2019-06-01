'use strict'

const router = new (require('koa-router'))

const meteorites = require('./meteorites')

router.use('/meteorites', meteorites.routes(), meteorites.allowedMethods())

module.exports = router