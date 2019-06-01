'use strict'

const {sources, dataProvider} = require('meteoritesData')
const {sourcesConfigsOverride} = require('../config')

module.exports = (async () => {
  const nasaLoad = sources.nasaLoad(sourcesConfigsOverride.nasaLoad)
  const meteoritesData = await dataProvider(nasaLoad)
  Object.assign(module.exports, meteoritesData)
  return meteoritesData
})()