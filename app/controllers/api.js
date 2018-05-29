const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const bodyParser = require('body-parser')
const helpers = require('../lib/helpers')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use('/api', router)
};

router.get('/test', (req, res, next) => {

  helpers.getArticles().then((data) => {
    helpers.saveArticles(data)
    res.json(data)
  })
});
