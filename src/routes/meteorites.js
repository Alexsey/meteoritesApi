'use strict'

const {has} = require('lodash')
const router = new (require('koa-router'))
const meteoritesData = require('../meteoritesData')

module.exports = router
  .get('/', async ctx => {
    let data = await meteoritesData.get(ctx.deepQuery)
    if (!data.length && has(ctx.deepQuery, 'mass.from')) {
      ctx.deepQuery = {
        year: await meteoritesData.getEarliestYearWithMass(ctx.deepQuery.mass.from),
        mass: {
          from: ctx.deepQuery.mass.from
        }
      }
      data = await meteoritesData.get(ctx.deepQuery)
    }

    ctx.body = {data, query: ctx.deepQuery}
  })
  .get('/count', async ctx => {
    ctx.body = (await meteoritesData.get(ctx.deepQuery)).length
  })