const helper = require('../lib/helpers')

module.exports = async function() {
	try {
		const articles = await helper.getArticles()
		const count = await helper.saveArticles(articles)
		console.log(`Found ${count} new articles`)
	} catch(err) {
		console.log('Could not retrieve articles. ', err)
	}
}