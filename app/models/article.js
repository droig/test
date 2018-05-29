// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String,
  author: String,
  articleDate: Date,
  articleID: Number

});

ArticleSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Article', ArticleSchema);

