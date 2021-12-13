const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")

function sfilesearch(query){
	return new Promise((resolve, reject) => {
		axios.get('https://sfile.mobi/search.php?q=' + query + '&search=Search')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				const link = [];
				const neme = [];
				const size = [];
				$('div.w3-card.white > div.list > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				$('div.w3-card.white > div.list > a').each(function(c, d) {
					name = $(d).text();
					neme.push(name)
				})
				$('div.w3-card.white > div.list').each(function(e, f) {
					siz = $(f).text();
					//sz = siz.
					size.push(siz.split('(')[1])
				})
				for (let i = 0; i < link.length; i++) {
					result.push({
						nama: neme[i],
						size: size[i].split(')')[0],
						link: link[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

module.exports = { sfilesearch }