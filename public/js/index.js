const Vue = require('vue')
const axios = require('axios')
const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')
const format = require('date-fns/format')

window.paceOptions = { ajax: {trackMethods:["GET", "DELETE"], trackWebSockets:true, ignoreURLs:[]} }
require('pace-js')
Pace.start()



var app = new Vue({
  el: '#app',

  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    articles: []
  },


  created() {
    axios.get('/api/articles')

    .then(res => {
      this.articles = res.data
    })

    .catch(err => {
      console.log('Error: ', err)
    });
	},


  methods: {

    deleteArticle(id) {

      axios.delete('/api/article/' + id).then(res => {
        this.articles = res.data;
      }).catch(err => {
        console.log('error getting articles')
      })
    },


    openUrl(url) {
      let win = window.open(url, '_blank');
      win.focus();
    }
  },


  filters: {

    toDate(value) {
      let date = new Date(value)
      let now = new Date()
      let timeDiff = Math.abs(now.getTime() - date.getTime());
      let diffDays = timeDiff / (1000 * 3600 * 24);

      if (diffDays < 1) {
        return distanceInWordsToNow(date)
      }

      if (diffDays >= 1 && diffDays < 2) {
        return 'Yesterday'
      }

      return format(date, 'MMM D')
    }

  }

})