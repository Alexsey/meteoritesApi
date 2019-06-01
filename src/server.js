'use strict'

const app = new (require('koa'))

const {port} = require('../config')
const router = require('./routes')

app
  .use(require('./middlewares/requestTimeLogger'))
  .use(require('./middlewares/nestedQueryParamsParser'))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => console.log(`Server started on port ${port}`))