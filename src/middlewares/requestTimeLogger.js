'use strict'

module.exports = async (ctx, next) => {
  const start = Date.now()
  await next()
  console.log(`${ctx.method.padEnd(4)} ${ctx.url} - ${Date.now() - start}ms`)
}