'use strict'

const _ = require('lodash')
const {set} = require('lodash')

module.exports = async (ctx, next) => {
  ctx.deepQuery = _(ctx.query)
    .keys()
    .orderBy(key => (key.match(/\./g) || []).length)
    .transform((query, param) => set(query, param, ctx.query[param]), {})
    .value()

  await next()
}