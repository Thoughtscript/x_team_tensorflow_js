'use strict'

/**
 * Main view controller - for single page app.
 */

const express = require('express'),
  view = express.Router()

view.get('/', (req, res) => res.render('aapl.ejs'))

console.log(`View controller initialized!`)

module.exports = view