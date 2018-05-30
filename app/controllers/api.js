const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const helpers = require('../lib/helpers')
mongoose.Promise = global.Promise

module.exports = (app) => {
  app.use('/api', router)
};

router.get('/test', async (req, res, next) => {
  
  const data = await helpers.getArticles()
  const count = await helpers.saveArticles(data)
  res.json({ insertedArticles: count })
})


router.get('/articles', async (req, res, next) => {

  const articles = await Article.find().sort({ articleDate: -1 })
  res.json(articles)

})


router.delete('/article/:articleId', async (req, res, next) => {

  const aID = req.params.articleId
  let articles;
  try {
    await Article.remove({ _id: aID })
    articles = await Article.find()
    res.json(articles)
  } catch (err) {
    return next(err)
  }

})


router.get('/last-article', (req, res, next) => {

  Article.findOne().sort({ articleDate: -1 }).exec( (err, data) => {
    if (err) return next(err)
    res.json(data)
  })

})
//Article.findOne().sort({ articleDate: -1 });