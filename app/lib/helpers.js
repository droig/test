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

	saveArticles: async (data) => {
		let count = 0;
		if (!data.hits) return 0;

		let lastArticle, lastArticleDate
		try {
			lastArticle = await Article.findOne().sort({ articleDate: -1 })
			lastArticleDate = new Date(lastArticle.articleDate)
		} catch (err) {
			lastArticleDate = new Date(null)
		}
		

		for (let i in data.hits) {
			
			let hit = data.hits[i]

			let articleDate = new Date(hit.created_at)

			if (lastArticleDate >= articleDate) continue
			
			let article = new Article({
				articleDate: 	hit.created_at,
				title: 			(hit.story_title && hit.story_title!=='') ? hit.story_title : hit.title,
				url: 			(hit.story_url && hit.story_url!=='') ? hit.story_url : hit.url,
				author: 		hit.author,
				articleID: 		hit.objectID
			})

			try {
				await article.save()
				count++
			} catch (err) {
				console.log('could not save article')
			}
		}

		return count
	},

	filterArticlesByDate: (data) => {
		Article.findOne().sort({ articleDate: -1 });
	}

}