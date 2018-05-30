const helper = require('../lib/helpers')
const format = require('date-fns/format')

module.exports = async function() {
	try {
		const articles = await helper.getArticles()
		const count = await helper.saveArticles(articles)
		const date = format(new Date(), 'HH:mm')
		console.log(`Found ${count} new articles - ${date}`)
	} catch(err) {
		console.log('Could not retrieve articles. ', err)
	}
}