const request = require('request-promise')
const mongoose = require('mongoose')
const Article = mongoose.model('Article')


module.exports = {

	getArticles: async () => {
		const options = {
			json: true,
			uri: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
		};
		const response = await request(options)
		return response;
	},

	saveArticles: (data) => {
		if (data.hits)
		data.hits.forEach(hit => {
			let article = new Article({
				articleDate: hit.created_at,
				title: hit.story_title,
				url: hit.story_url,
				author: hit.author,
				articleID: hit.objectID
			})
			article.save()
		});
	}

}