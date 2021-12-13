const axios = require("axios");
const fs = require("fs-extra")
const fetch = require('node-fetch')

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

function runtime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var date = Math.floor(seconds / (3600 * 24));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${date}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

  const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = { getBuffer, getGroupAdmins, getRandom, runtime, sleep }