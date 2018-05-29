const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const helpers = require('../lib/helpers')
mongoose.Promise = global.Promise

module.exports = (app) => {
  app.use('/api', router)
};

router.get('/test', (req, res, next) => {
  
  helpers.getArticles().then( async(data) => {
    
    const count = await helpers.saveArticles(data)
    res.json({ insertedArticles: count })
  })
})


router.get('/articles', (req, res, next) => {

  Article.find((err, articles) => {
    if (err) return next(err)
    res.json(articles)
  })

})


router.delete('/article/:articleId', (req, res, next) => {

  const aID = req.params.articleId

  Article.remove({ _id: aID }, (err) => {
    if (err) return next(err)
    res.json({ deleted: aID })
  })

})


router.get('/last-article', (req, res, next) => {

  Article.findOne().sort({ articleDate: -1 }).exec( (err, data) => {
    if (err) return next(err)
    res.json(data)
  })

})
//Article.findOne().sort({ articleDate: -1 });