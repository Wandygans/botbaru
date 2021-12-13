const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const ig = require('insta-fetcher')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const ggs = require('google-it')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const hx = require('hxz-api')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const { virtex, vipi } = require('./lib/virtex.js')
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { pShadow,
  pCup,
  pMetalic,
  pVintage,
  pSumer,
  pGrafiti,
  pGolden,
  pRomantic,
  pUnderwater,
  pFlaming,
  pScary,
  pSmoke,
  pFur,
  pBurnPapper,
  pNaruto,
  pWood,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pStars,
  pDoubleHeart,
  pCoffeCup,
  pButterfly } = require('./lib/photooxy')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { Wodden } = require('./lib/crismas')
const { Wolf } = require('./lib/wolf')
const { textpro } = require('./lib/crismas')
const { deep } = require('./lib/deep')
const { Text3d } = require('./lib/text3d')
const { Neon } = require('./lib/neon')
const { Sweet } = require('./lib/sweet')
const { Letter } = require('./lib/letter')
const { Army } = require('./lib/army')
const { Vintage } = require('./lib/vintage')
const { Candy } = require('./lib/candy')
const { Underwhite } = require('./lib/underwhite')
const { Crisp } = require('./lib/crisp')
const { Cake } = require('./lib/cake')
const { Striking } = require('./lib/striking')
const { Melon } = require('./lib/watermelon')
const { blackpink } = require('./lib/blackpink')
const { indonesia } = require('./lib/indonesia')
const { fur } = require('./lib/fur')
const { Igstalk } = require('./lib/igstalk')
const { surahscrap } = require('./lib/surah')
const { Trendtwit } = require('./lib/trendtwit')
const { upload } = require('./lib/upload')
const {  limitend, limitcount } = require('./lib/help')
const { yta, ytv, igdl, formatDate } = require('./lib/ytdl')
const { covid } = require('./lib/covid')
const { pinterest } = require('./lib/pinterest')
const { Gempa } = require('./lib/gempa')
const { wikiSearch } = require('./lib/wiki.js')
const { playstore } = require('./lib/playstore')
const { linkwa } = require('./lib/carigrup')
const { Artinama } = require('./lib/artinama')
const { quotesAnime } = require('./lib/scraper')
const { sfilesearch } = require('./lib/sfile')
const { searchs } = require('./lib/sticsearch')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const scrapper = require('./lib/scrapper')
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = true
let mtk = []
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
ley = "MIMINGANZ"
dappauhuy = "Ochobot"
bsbt = "benniismaelapikey"
chipa = "TP9MYI37I0UAUONJC9JQ6TXS"
HunterApi = "Ikyy69"
limitt = setting.limitt
botname = setting.botName
ownername = setting.ownerName
gamewaktu = setting.gamewaktu
petik = '```'
fake = '©Ochobot'//GANTI NAMA KAMU BEP
ban = []
thumbnail = fs.readFileSync('./ndy.jpg')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:WandyGans\n'
            + 'ORG:Sibuk;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281290565513:+62 812-9056-5513\n'
            + 'END:VCARD'
// Database
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

//limit
const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        dha.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }


module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		hit_today.push(command)
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const botNumber = dha.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : '-'
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const itsMe = mek.key.fromMe ? true : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isBadword = isGroup ? grupbadword.includes(from) : false

        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝕾𝖎𝖑𝖆𝖍𝖐𝖆𝖓 𝕻𝖎𝖑𝖎𝖍 𝕯𝖎𝖘𝖓𝖎!","footerText": "Bro Kenz Chanel❤️","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    dha.sendMessage(from, limitend(pushname), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/🗿https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      dha.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/ganteng.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/sherlynn.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       dha.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(to, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
           
break
        }
    }
}
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + '+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           dha.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}


          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang🏙️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'dha', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail':fs.readFileSync('./media/sherlynn.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/sherlynn.jpg`)},"title": `©Bro Kenz Chanel`,"description": "ItsMeBotz", "currencyCode": "IDR","priceAmount1000": "99999999","retailerId": "ItsMeBotz","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                dha.groupRemove(from, [sender])
            }
        }
        
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        // Sewa
             _sewa.expiredCheck(dha, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(dha, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    var htgm2 = randomNomor(50000)
                  atm.addKoinUser(sender, htgm2, balance)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                dha.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	if (!mek.key.fromMe && isGroup && badword.includes(messagesD)) {
		if (!isBotGroupAdmins) return reply(`Beruntung bot bukan admin, kalo admin aku kick kamu-_-`)
		if (!isGroupAdmins) return reply(`Halo admin ganteng/cantik jangan toxic dong :(`)
                        reply(`*「 ANTI BADWORD 」*\n\nAnda telah berkata kasar, anda akan di kick!`)
                        dha.groupRemove(from, [sender])
				}
					
						
	
	    // Auto Read
        dha.chatRead(from, "read")
      

       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ PRIV ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GC ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
  // Runtime Di Bio Bang🌹\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let uptime = process.uptime()
await dha.setStatus(`I'm Userbot 👾 | PUBLIC-MODE | Aktif Selama ${kyun(uptime)}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    

            switch(command){
case 'allmenu':


try {
                pp_user = await dha.getProfilePicture(`${num.split('@')[0]}@c.us`)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
gambar = await getBuffer(pp_user)
teks = `
Halo ${pushname} ${ucapanWaktu}

─❒ *YOU INFO* ❒
- Nama : ${pushname}
- Nomor : ${sender.split('@')[0]}
- Status : ${statuss}
- Xp : ${mu2Xp} / ${muXp}
- Level : ${levelmu}
- Role : ${rolemu}

─❒ *BOT INFO* ❒
- Name bot : ${botname}
- Name Owner : ${ownername}
- Prefix : ${prefix}
- Totalhit : ${hit_today.length}
- Runtime : ${runtime(process.uptime())}
- Speed : ${latensie.toFixed(4)} _Second_
- Total group : ${groups.length}
- Total chat : ${totalCht.length}
- Privat chat : ${privat.length}
- Server : https://pm2.io

*Regards : WandyGans*
`
teks2 =
`WhatsApp - BOT`
but = [
          { buttonId: `#owner`, buttonText: { displayText: '👑OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, teks2, gambar, but)
         
break
/*
─❒ *OTHER MENU* ❒
│${prefix}afk <alasan>
│${prefix}waktu
│${prefix}chat <628|teks>
│${prefix}sewabot
│${prefix}speed
│${prefix}tag <628xxx>
│${prefix}jadibot
│${prefix}listjadibot
│${prefix}stopjadibot
│${prefix}bugreport <masalah>
│${prefix}join <link group>
 
─❒ *OWNER MENU* ❒
│${prefix}ban <@tag>
│${prefix}unban <@tag>
│${prefix}self
│${prefix}public
│${prefix}restart
│${prefix}upswteks <teks>
│${prefix}shutdown
│${prefix}spam <teks|jumlah>
│${prefix}nano <nama file>
│${prefix}readall
│${prefix}delchat
│${prefix}clearall
│${prefix}setppbot <reply image>
│${prefix}setnamabot <nama>
│${prefix}setbio <teks>

─❒ *ISLAM MENU* ❒
│${prefix}alquran
│${prefix}tahlil
│${prefix}surah <nomor>

─❒ *DOWNLOADER MENU* ❒
│${prefix}tiktokdl <url>
│${prefix}igdl <url>
│${prefix}play <judul>
│${prefix}video <judul>

─❒ *SEARCH MENU* ❒
│${prefix}linkwa <nama group>
│${prefix}ppcouple
│${prefix}stickersearch <namasticker>
│${prefix}sfile <nama file>
│${prefix}artinama <nama>
│${prefix}google <query>
│${prefix}inspect <linkwa>
│${prefix}chara <naruto>
│${prefix}gimage <naisa>
│${prefix}anjing
│${prefix}artikata <teks>
│${prefix}pinterest <nama img>
│${prefix}bucin
│${prefix}quotes
│${prefix}shoppe <product>
│${prefix}wiki <query>
│${prefix}readmore <teks|teks>
│${prefix}ytsearch <nama video>
│${prefix}playstore <nama aplikasi>

─❒ *ANIME MENU* ❒
│${prefix}hentai
│${prefix}neko
│${prefix}wallml
│${prefix}quotesanime
│${prefix}waifu
│${prefix}yuri
│${prefix}patrick
│${prefix}lolivideo
│${prefix}doge
│${prefix}wallpaper
│${prefix}loli
│${prefix}animestick
│${prefix}gura
│${prefix}holo
│${prefix}husbu
│${prefix}trap
│${prefix}cosplay
│${prefix}milf
│${prefix}naruto

─❒ *MAKER MENU* ❒
│${prefix}sumer <teks>
│${prefix}golden <teks>
│${prefix}butter <teks>
│${prefix}coffe <teks>
│${prefix}wolf <teks>
│${prefix}love <teks>
│${prefix}neon <teks>
│${prefix}neonlight <teks>
│${prefix}love2 <teks>
│${prefix}tahta <teks>
│${prefix}vintage <teks>
│${prefix}stars <teks>
│${prefix}spary <teks>
│${prefix}sweet <teks>
│${prefix}grass <teks>
│${prefix}pornhub <teks/teks>
│${prefix}wood <teks>
│${prefix}burn <teks>
│${prefix}text3d <teks>
│${prefix}underwhite <teks>
│${prefix}smoke <teks>
│${prefix}fur <teks>
│${prefix}melon <teks>
│${prefix}candy <teks>
│${prefix}matrix <teks>
│${prefix}cake <teks>
│${prefix}striking <teks>
│${prefix}wooden <teks>
│${prefix}scary <teks>
│${prefix}rainbow <teks>
│${prefix}army <teks>
│${prefix}blackpink <teks>
│${prefix}underwater <teks>
│${prefix}flaming <teks>
│${prefix}romantic <teks>
│${prefix}naruto <teks>
│${prefix}cup <teks>
│${prefix}crisp <teks>
│${prefix}shadow <teks>
│${prefix}crismas <teks>
│${prefix}deep <teks>
│${prefix}glitch <teks/teks>

─❒ *GROUP MENU* ❒
│${prefix}groupsetting
│${prefix}listonline
│${prefix}infogroup
│${prefix}getbio <@tag>
│${prefix}tagall
│${prefix}caripesan <pesan|12>
│${prefix}tagme
│${prefix}resetlink
│${prefix}leave
│${prefix}linkgroup
│${prefix}getpp <@tag>
│${prefix}stickertag <replysticker>
│${prefix}hidetag <teks>
│${prefix}setdesc <teks>
│${prefix}sider <reply pesan bot>
│${prefix}add <628>
│${prefix}setppgrup <reply img>
│${prefix}setgrupname <name>
│${prefix}kick <@tag>
│${prefix}delete <tag pesan bot>

─❒ *TOOLS MENU* ❒
│${prefix}tinyurl <url>
│${prefix}get <url>
│${prefix}bass <reply audio>
│${prefix}balik <reply audio>
│${prefix}semoji <emote>
│${prefix}sticker <image>
│${prefix}swm <image>
│${prefix}igstalk <username>
│${prefix}toimg <sticker>
│${prefix}imgtourl <image>
│${prefix}imgtourl2 <image>
│${prefix}tomp3 <video>
│${prefix}tovideo <sticker>

─❒ *NEWS MENU* ❒
│${prefix}covid
│${prefix}trendtwit
│${prefix}indozone
│${prefix}infocuaca <daerah>
│${prefix}kompas
│${prefix}infogempa

─❒ *GAME MENU* ❒
│${prefix}mining
│${prefix}slot
│${prefix}jadian
│${prefix}babi
│${prefix}bego
│${prefix}tolol
│${prefix}pinter
│${prefix}pintar
│${prefix}asu
│${prefix}bodoh
│${prefix}gay
│${prefix}lesby
│${prefix}bajingan
│${prefix}jancok
│${prefix}anjing
│${prefix}ngentod
│${prefix}ngentot
│${prefix}monyet
│${prefix}mastah
│${prefix}newbie
│${prefix}bangsat
│${prefix}bangke
│${prefix}sange
│${prefix}sangean
│${prefix}dakjal
│${prefix}horny
│${prefix}wibu
│${prefix}puki
│${prefix}pantek
│${prefix}beban
│${prefix}fitnah
│${prefix}limitgame
│${prefix}persengay <nama>
│${prefix}persenganteng <nama>
│${prefix}persencantik <nama>
│${prefix}tebakgambar
│${prefix}tictactoe <@tag>
│${prefix}cekmati <nama>
│${prefix}cekwatak
│${prefix}pacaran
│${prefix}truth
│${prefix}dare
│${prefix}apakah <pertanyaan>
│${prefix}bagaimanakah <pertanyaan>
│${prefix}kapankah <pertanyaan>
│${prefix}bisakah <pertanyaan>
│${prefix}rate <sesuatu>
*/
case 'bokep':
try{
if(!isGroup)return reply(`Maaf fitur ini khusus grup`)
reply(mess.wait)
boks = Date.now();
bok = await scrapper.pornvid()
bokt = `BOKEP

┬╗ Judul    : ${bok.hasil.title}
┬╗ Upload   : ${bok.hasil.upload}
┬╗ Views    : ${bok.hasil.views}
┬╗ Like     : ${bok.hasil.like}
┬╗ Dislike  : ${bok.hasil.dislike}
┬╗ Favorite : ${bok.hasil.favorite}
┬╗ Tag      : ${bok.hasil.tags}
┬╗ Source   : ${bok.hasil.source}`

sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.thumb, bokt)
sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.video, monospace(`Process ${((Date.now()-boks)/1000).toFixed(1)} Seconds`))
} catch (e){
console.log(e)
reply(e)
}
break
case 'video':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
                            var ytvideo = args.join('')
    		hasil = await yts(ytvideo);
    		keramas = hasil.all 
   			var mulai = keramas[0].url							
                            try {
                                reply(mess.wait)
                                ytv(mulai)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `⬣ *mp4*\n\n⬣ *Title* : ${title}\n⬣ *Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(`Error cuy`)
                            }
                            break
case prefix+'pet': case prefix+'petpet':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptoibb(yoooo)
                    let a = await petpet(link, {resolution: 1080})
                    fs.unlinkSync(yoooo)
                    fs.writeFileSync('petpet.gif', a)
                    await WSF.createSticker('petpet.gif', { type: 'full' ,pack: setting.packSticker,author: setting.authorSticker,categories: ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => xinz.sendMessage(from, buffer, sticker, { quoted: msg}))
                    fs.unlinkSync('petpet.gif')
                  	limitAdd(sender, limit)
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptoibb(ran)
                    let a = await petpet(link, {resolution: 1080})
                    fs.unlinkSync(ran)
                    fs.writeFileSync('petpet.gif', a)
                    await WSF.createSticker('petpet.gif', { type: 'full' ,pack: setting.packSticker,author: setting.authorSticker,categories: ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," ??","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => xinz.sendMessage(from, buffer, sticker, { quoted: msg}))
                    fs.unlinkSync('petpet.gif')
                  	limitAdd(sender, limit)
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
case 'antibadword':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (!args.length === 1) return reply(`Pilih 1 untuk mengaktifkan atau 0 untuk menonaktifkan`)
                if (Number(args[0]) === 1) {
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (Number(args[0]) === 0) {
                    anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else {
                    reply(`Pilih 1 untuk mengaktifkan atau 0 untuk menonaktifkan`)
                }
                break
            case 'listbadword':
                let biba = `List badword\n\n`
                for (let boo of badword){
                    biba+= `- ${boo}\n`
                }
                biba+= `\nTotal : ${badword.length}`
                reply(biba)
                break
            case 'addbadword':
                if (!isGroupAdmins) return reply("khusus admin")
                if (args.length < 1) return reply(`masukkan kata`)
                query = args.join("")
                if (isKasar(query, badword)) return reply(`Udah ada`)
                addBadword(query, badword)
                reply(`Sukses`)
                break
            case 'delbadword':
                if (!isOwner) return reply("khusus owner")
                if (args.length < 1) return reply(`masukkan kata`)
                query = args.join("")
                if (!isKasar(query, badword)) return reply(`Ga ada`)
                delBadword(query, badword)
                reply(`Sukses`)
                break
case 'play':

			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)

            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                           
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(`Error`)
                        }
                   break
case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					dha.sendMessage(from, tagq, text, { quoted: mek, mentionedJid: [tagq]})
			break
case 'getbio':
if (!q) return reply(mess.wrongFormat)
if (!isGroup) return reply(mess.only.group)
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await dha.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(`Error bro`)
}
break
case 'upswteks':
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    dha.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} dha`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
              dha.sendMessage(from, buffer, sticker, { quoted: mek })
              break
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Damsarr ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'igstalk':
reply(mess.wait)
            if (!q) return reply('Usernamenya?')
            Y = await Igstalk(`${args.join(' ')}`)
            console.log(Y)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            break    
case 'stopjadibot':
if(!itsMe && !isOwner) return reply('tidak bisa stopjadibot kecuali owner')
stopjadibot(reply)
break
    
case 'listbot':
case 'listjadibot':
case 'listjadibotz':
let tekss = 'L I S T B O T \n\n'
let lbt = [];
for(let i of listjadibot) {
lbt.push(i.jid)
tekss += `
N a m a : ${i.name}

T a g : @${i.jid.split('@')[0]}

D e v i c e: ${i.phone.device_manufacturer}

M o d e l : ${i.phone.device_model}\n\n`
}
mentions(monospace(tekss), lbt, true)
break
case 'jadibot':
if(itsMe) return reply('Tidak bisa jadibot di dalam bot')
if (isGroup) return reply(`*Fitur Hanya dapat digunakan dalam Private Chat! => wa.me/628570164768?text=${prefix}jadibot*`)
jadibot(reply,dha,from, mek)
break
case 'setppbot':
case 'setbotpp':
									if (!isOwner) return reply(`Khusus owner`)
									if (!isQuotedImage) return reply(`Reply image nya`)
									enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await dha.downloadAndSaveMediaMessage(enmedia)
									await dha.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
case 'setnamabot':
{
									if (!isOwner) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${prefix}${command} nama\n\nContoh : ${prefix}${command} Ochobot`)
									dha.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
case 'linkgc':
case 'grouplink':
case 'linkgroup':
 
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await dha.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									dha.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: mek})
									
									break
case 'resetlink':
case 'resetlinkgroup':
 
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && isOwner) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									dha.query({ json: ['action', 'inviteReset', from], expect200: true })
									reply(`Sukses Reset Link Group!`)
									
									break
case 'quotes':
 
				 quotes = fs.readFileSync('./lib/quotes.js');
                 jsonData = JSON.parse(quotes);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 teks = `「 *QUOTES* 」\n*Creator* : ${randKey.author}\n*Quotes* : ${randKey.quotes}`
                 reply(teks)
                 
				break
case 'surah':
 
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
surah = await surahscrap(`${q}`)
console.log(surahscrap)
teks = `「 *SURAH* 」\n`
                for (let i of surah) {
				teks += `\n*Indo* : ${i.indo}\n*Arab* : ${i.arab}\n*Latin* : ${i.latin}\n`
				}
				reply(teks.trim())
				
		break
case 'kompas':
 
                kompas = await fetchJson(`http://hadi-api.herokuapp.com/api/kompas`)
                teks = `「 *KOMPAS* 」\n`
                for (let i of kompas.result) {
				teks += ` \n*Title* : ${i.title}\n*Url* : ${i.url}\n*Img* : ${i.img}\n*Waktu* : ${i.time}\n\n`
				}
				reply(teks.trim())
				
                break
case 'indozone':
 
                kompas = await fetchJson(`https://api.dapuhy.ga/api/berita/indozone?apikey=${dappauhuy}`)
                teks = `「 *INDOZONE* 」\n`
                for (let i of kompas.result) {
				teks += `\n*Judul* : ${i.title}\n*Image* : ${i.thumb}\n*Upload* : ${i.upload}\n*Jenis* : ${i.jenis}\n*Url* : ${i.url}\n\n`

				}
				reply(teks.trim())
				
                break
case 'tahlil':
 
                tahlil = await fetchJson(`https://api.dapuhy.ga/api/islam/tahlil?apikey=${dappauhuy}`)
                teks = `「 *TAHLIL* 」\n`
                for (let i of tahlil.result) {
				teks += `\n${i.title}\n\n${i.arabic}\n\n${i.translation}\n`
				}
				reply(teks.trim())
				
                break
case 'brainly':
 
			    if (!q) return reply(`Masukan yang mau di cari`)
			    teks = args.join(' ')
                brainly = await fetchJson(`https://bsbt-api-rest.herokuapp.com/api/brainly?query=${teks}&apikey=${bsbt}`)
                tek = `「 *BRAINLY* 」\n*Pencarian* : ${teks}\n━━━━━━━━━━━━━━━━━━━━━\n*Hasil* : ${brainly.jawaban}`
                reply(tek)
                
                break
case 'infocuaca':
 
			    if (!q) return reply(mess.wrongFormat)
			    daerah = args.join(' ')
                infocuaca = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${daerah}&apikey=${ley}`)
                teks = `「 *CUACA* 」\n*Daerah* : ${infocuaca.result.Daerah}\n*Latitude* : ${infocuaca.result.Latitude}\n*Longitude* : ${infocuaca.result.Longitude}\n*TimeZone* : ${infocuaca.result.TimeZone}\n*Temperature* : ${infocuaca.result.Temperature}\n*Tanggal* : ${infocuaca.result.Tanggal}\n*Waktu* : ${infocuaca.result.Waktu}\n*Hari* : ${infocuaca.result.Hari}\n*Cuaca* : ${infocuaca.result.Cuaca}`
                reply(teks)
                
                break
case 'wallpaper':
 
                reply(mess.wait)
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/walpaperanime`)
                dha.sendMessage(from, buff, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
                
                break
case 'ayatkursi':
 
ayat = await fetchJson(`https://api.dapuhy.ga/api/islam/ayatkursi?apikey=${dappauhuy}`)
teks = `「 *ALQURAN* 」
${ayat.result.tafsir}

${ayat.result.translation}

${ayat.result.arabic}

${ayat.result.latin}`
reply(teks)

break
case 'shutdown':
					if (!isOwner) return reply(mess.only.owner)
				return dha.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
case 'spam':
				if (!isOwner)return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					dha.sendMessage(from, argzi[0], MessageType.text)
				}
				break
case 'restart':
if (!isOwner) return reply(mess.only.owner)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'delchat':
                    if (!isOwner) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                dha.modifyChat(from, ChatModification.delete)
                break
case 'clearall':
				if (!isOwner) return reply(mess.only.owner)
					anu = await dha.chats.all()
					dha.setMaxListeners(10)
					for (let _ of anu) {
						dha.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            dha.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await dha.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                
 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await dha.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
				})
				
				break
case 'ig':
case 'igdl':
case 'instagram':

reply(mess.wait)
if (!q) return reply(mess.wrongFormat)
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply(`Error cuy`)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)

                    break
case 'nano':
if (!isOwner) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'chara':

            reply(mess.wait)
            if (!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${q}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            dha.sendMessage(from, li, image, {quoted: mek, caption: `*Result* : ${acak}`, thumbnail: Buffer.alloc(0)})
            
            break
case 'alquran':

reply(mess.wait)
alquran = await fetchJson(`https://leyscoders-api.herokuapp.com/api/randomquran?apikey=${ley}`)
teks = `
「 *ALQURAN* 」

*Nama* : ${alquran.result.nama}
*Ayat* : ${alquran.result.ayat}
*Arti* : ${alquran.result.arti}
*Type* : ${alquran.result.type}
*Rukuk* : ${alquran.result.rukuk}
*Nomor* : ${alquran.result.nomor}
*Urut* : ${alquran.result.urut}
*Keterangan* : ${alquran.result.ket}\n\n_Tunggu sebentar sedang mengirim audio_`
audiobuff = await getBuffer(alquran.result.audio)
reply(teks)
dha.sendMessage(from, audiobuff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'google':
case 'googlesearch':
case 'ggs':

if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
resss = await ggs({'query' : `${teks}`})
kant = ``
for (let i of resss) {
kant += `\n*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}\n`
}
var akhir = kant.trim()
reply(akhir)

break
case 'shoppe':

                query = args.join(' ')
                reply(mess.wait)
                shop = await fetchJson(`https://x-restapi.herokuapp.com/api/shopee-search?q=${query}&apikey=BETA`, {method: 'get'})
                buff = await getBuffer(shop.image)
                capt = `
「 *SHOOPE* 」
*Nama product* : ${shop.name}
*Mata uang* : ${shop.currency}
*Stok* : ${shop.stock}
*Pembeli* : ${shop.historical_sold}
*Like* : ${shop.liked_count}
*View* : ${shop.view_count}
*Item status* : ${shop.item_status}
*Price* : ${shop.price}
*Rate* : ${shop.item_rating}
*Lokasi* : ${shop.shop_location}`
                dha.sendMessage(from, buff, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: capt})
                
                break
case 'infogroup':

                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await hexa.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        dha.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`, thumbnail: Buffer.alloc(0)})
		
                break
case 'imgtourl2':
reply(mess.wait)

var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  dha.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMGBB TO URL 」\n冬\n冬• ID : ${data.id}\n冬• MimeType : ${data.image.mime}\n冬• Extension : ${data.image.extension}\n冬\n冬• URL : ${data.display_url}\n╰─────────────────`
ibb = fs.readFileSync(jnckk)
dha.sendMessage(from, ibb, image, { quoted: mek, thumbnail: Buffer.alloc(0), caption: caps })
})
.catch(err => {
throw err 
})

break
case 'imgtourl':
reply(mess.wait)

            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await dha.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            console.log(res)
            } else {
            reply('kirim gambar atau reply gambar yang sudah dikirim')
            }
            
            break
case 'artikata':
try {

if (!q) return reply(mess.wrongFormat)
query = args.join(' ')
artikata = await fetchJson(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${query}&apikey=${ley}`)
reply(`${artikata.result}`)
} catch (e) {
reply(`Scrape sedang error`)
}

break
case 'naruto':

reply(mess.wait)
try {
            let pin = await pinterest(`naruto`)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(ac))
buttons = [{buttonId:`#naruto`,buttonText:{displayText:`⫹⫺ NARUTO ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Naruto Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
            } catch (e) {
            reply(`Maaf scraper sedang error ulangi lagi`)
            }
            
            break
case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
case 'limit':
try {
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`Limit anda habis`, id)
                            await reply(`*Sisah limit anda tinggal : ${limitCounts}*`)
                            found = true
}
}
} catch (e) {
reply(`limit elu abis awoakwok`)
}
                    break
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              dha.sendMessage('6281290565513@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
break
case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
break
       case 'beban':

              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              
break
case 'online':
       case 'listonline':
       case 'here':
                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(dha.chats.get(ido).presences), dha.user.jid]
             dha.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             
break
case 'inspect':

reply(mess.wait)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await dha.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             dha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch (e) {
             console.log(e)
             reply('Link error')
             }
             
break
case 'caripesan':

            if(!q)return reply('pesannya apa bang?')
            let v = await dha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await dha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            
break
case 'tagme':

					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [nom] }
					}
					dha.sendMessage(from, tag, text, {quoted: mek})
					
break
case 'tagall':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              
break
case 'google':
case 'googlesearch':
case 'ggs':

if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
resss = await ggs({'query' : `${teks}`})
kant = ``
for (let i of resss) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)

break
case 'gimage':
case 'googleimage':

if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
ressss = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}

break
case 'getpp':

					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await dha.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await dha.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				dha.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
		} else {
		}
			  
break
case 'leave':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              dha.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              
break
case 'pinterest':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
reply(mess.wait)
try {
            if(!q) return reply('gambar apa?')
            let pin = await pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await dha.sendMessage(from,di,image,{quoted: mek , thumbnail: Buffer.alloc(0), caption: `*Result* : ${ac}`})
            } catch (e) {
            reply(`Maaf result ${prefix}${command} ${q} tidak ada`)
            }
break
case 'get':
case 'fetch':

            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            
break
case 'stickertag':

reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await dha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dha.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            dha.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            
break
case 'fitnah':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				 if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				 var gh = body.slice(8)
				 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			     var replace = gh.split("/")[0];
			     var target = gh.split("/")[1];
				 var bot = gh.split("/")[2];
				 dha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
break
case 'covid':

covid().then(res => {
reply(`*COVIDINDO*\n- Positif : ${res.indo.indoP}\n- Sembuh : ${res.indo.indoS}\n- Meninggal : ${res.indo.indoM}\n- Update : ${res.indo.indoU}\n`)
})
   
break
case 'artinama':
if (!q) return reply(mess.wrongFormat)
arti = await Artinama(`${q}`)
reply(arti)
break
case 'sfile':
if (!q) return reply(mess.wrongFormat)
sfile = await sfilesearch(`${q}`)
teks = `「 *SFILE* 」\n`
                for (let i of sfile) {
				teks += `\n*Nama* : ${i.nama}\n*Size* : ${i.size}\n*Link* : ${i.link}\n`
				}
				reply(teks.trim())
break
case 'stickersearch':
if (!q) return reply(mess.wrongFormat)
stik = await searchs(`${q}`)
reply(mess.wait)
reply(`*Title* : ${stik.title}\n*Author* : ${stik.author}\n*Author_link* : ${stik.author_link}\n\n_Tunggu sedang mengirim sticker!_`)
let linkstic = stik.sticker[Math.floor(Math.random(), stik.sticker.length)]
sendWebp(from, `${linkstic}`)
break
case 'quotesanime':
{
let anu = await quotesAnime()
                let result = anu[Math.floor(Math.random(), anu.length)]
               reply(`*QUOTES ANIME*\n\n_${result.quotes}_\n\nBy ${result.karakter}`)
               }
break
case 'infogempa':

reply(mess.wait)
hasil = await Gempa()
teks = `*INFO GEMPA*
*Wilayah* : ${hasil.Wilayah}
*Lintang* : ${hasil.Lintang}
*Bujur* : ${hasil.Bujur}
*Magnitudo* : ${hasil.Magnitudo}
*Kedalaman* : ${hasil.Kedalaman}
*Map* : ${hasil.Map}`
buff = await getBuffer(hasil.Map)
dha.sendMessage(from, buff, image, {quoted: mek, caption: teks, thumbnail: Buffer.alloc(0)})
		
break
case 'trendtwit':

reply(mess.wait)
trend = await Trendtwit()
console.log(trend)
teks = `「 *TRENDTWITTER* 」\n`
                for (let i of trend.result) {
				teks += `\n*Rank* : ${i.rank}\n*Hastag* : ${i.hastag}\n*Tweet* : ${i.tweet}\n`
				}
				reply(teks.trim())
break
case 'glitch':

                if (!q) return reply(`Contoh ${prefix}${command} teks/teks`)
                reply(mess.wait)
                tahtar3 = args.join(' ')
                tahtar = tahtar3.split("/")[0];
			    tahtar2 = tahtar3.split("/")[1];
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${tahtar}&teks2=${tahtar2}`, {method: 'get'})
                dha.sendMessage(from, buff, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
                
break
case 'pornhub':

                if (!q) return reply(`Contoh ${prefix}${command} teks/teks`)
                reply(mess.wait)
                tahtar3 = args.join(' ')
                tahtar = tahtar3.split("/")[0];
			    tahtar2 = tahtar3.split("/")[1];
                buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/phblogo?text1=${tahtar}&text2=${tahtar2}`)
                dha.sendMessage(from, buff, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
                
break
case 'husbu':

				 reply(mess.wait)
				 husbu = fs.readFileSync('./lib/husbu.js');
                 jsonData = JSON.parse(husbu);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buff = await getBuffer(randKey.result)
                 dha.sendMessage(from, buff, image, { quoted: mek, thumbnail: Buffer.alloc(0)})
				 
break
case 'loli':

				 reply(mess.wait)
				 loli = fs.readFileSync('./lib/loli2.js');
                 jsonData = JSON.parse(loli);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buff = await getBuffer(randKey.result)
                 dha.sendMessage(from, buff, image, { quoted: mek, thumbnail: Buffer.alloc(0)})
				 
break
case 'lolivideo':

				reply(mess.wait)
				 lolivideo = fs.readFileSync('./lib/loli.js');
                 jsonData = JSON.parse(lolivideo);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                reply(randKey.result)
				
break
case 'sumer':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
sumer = await pSumer(`${teks}`)
sendMediaURL(from, sumer.url)
		
break
case 'golden':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
golden = await pGolden(`${q}`)
sendMediaURL(from, golden.url)
		
break
case 'butter':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
butter = await pButterfly(`${q}`)
sendMediaURL(from, butter.url)
		
break
case 'coffe':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
coffe = await pCoffeCup(`${q}`)
sendMediaURL(from, coffe.url)
		
break
case 'love2':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
love2 = await pDoubleHeart(`${q}`)
sendMediaURL(from, love2.url)
		
break
case 'grass':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
grass = await pMsgGrass(`${q}`)
sendMediaURL(from, grass.url)
		
break
case 'love':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
love = await pLoveMsg(`${q}`)
sendMediaURL(from, love.url)
		
break
case 'wood':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
wood = await pWood(`${q}`)
sendMediaURL(from, wood.url)
		
break
case 'wooden':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Wodden(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'fur':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await fur(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'wolf':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Wolf(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'neon':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Neon(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'text3d':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Text3d(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'sweet':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Sweet(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'rainbow':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Letter(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'army':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Army(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'vintage':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Vintage(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'candy':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Candy(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'underwhite':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Underwhite(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'stars':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await pStars(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'crisp':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Crisp(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'cake':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Cake(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'striking':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Striking(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'melon':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
woodenn = await Melon(`${q}`)
sendMediaURL(from, woodenn.url)
		
break
case 'burn':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
burn = await pBurnPapper(`${q}`)
sendMediaURL(from, burn.url)
		
break
case 'smoke':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
smoke = await pSmoke(`${q}`)
sendMediaURL(from, smoke.url)
		
break
case 'scary':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
scary = await pMetalic(`${q}`)
sendMediaURL(from, scary.url)
		
break
case 'underwater':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
underwater = await pUnderwater(`${q}`)
sendMediaURL(from, underwater.url)
		
break
case 'flaming':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
flaming = await pFlaming(`${q}`)
sendMediaURL(from, flaming.url)
		
break
case 'romantic':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
romantic  = await pRomantic(`${q}`)
sendMediaURL(from, romantic.url)
		
break
case 'naruto':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
pNaruto(`${q}`)
   .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		
break
case 'cup':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
cup =  await pCup(`${q}`)
sendMediaURL(from, cup.url)
		
break
case 'shadow':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await pShadow(`${q}`)
sendMediaURL(from, shadow.url)
		
break
case 'crismas':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await textpro(`${q}`)
console.log(shadow)
sendMediaURL(from, shadow)
		
break
case 'deep':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await deep(`${q}`)
console.log(shadow)
sendMediaURL(from, shadow)
		
break
case 'sci':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await indonesia(`${q}`)
console.log(shadow)
sendMediaURL(from, shadow)
		
break
case 'blackpink':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${q}`)
dha.sendMessage(from, shadow, image, {quoted: mek, thumbnail: Buffer.alloc(0)})

break
case 'neonlight':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${q}`)
dha.sendMessage(from, shadow, image, {quoted: mek, thumbnail: Buffer.alloc(0)})

break
case 'spary':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${q}`)
dha.sendMessage(from, shadow, image, {quoted: mek, thumbnail: Buffer.alloc(0)})

break
case 'tahta':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await getBuffer(`https://api.chipa.xyz/api/harta?text=${q}&apikey=${chipa}`)
dha.sendMessage(from, shadow, image, {quoted: mek, thumbnail: Buffer.alloc(0)})

break
case 'matrix':

if (!q) return reply(`Example : ${prefix}${command} tes`)
reply(mess.wait)
shadow = await getBuffer(`https://api.chipa.xyz/api/textpro/matrix?text=${q}&apikey=${chipa}`)
dha.sendMessage(from, shadow, image, {quoted: mek, thumbnail: Buffer.alloc(0)})

break
case 'semoji':

reply(mess.wait)
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   
break
case 'hidetag':

				if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await dha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
				    dha.sendMessage(from, options, text)
					
break
case 'sider':

             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             
break
case 'setppgrup':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await dha.downloadMediaMessage(encmedia)
              dha.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              
break
case 'setdesc':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              dha.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              
break
case 'add':

					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`Yang mau di add siapa??\nContoh ${command} 6281290565513`)
					if (args[0].startsWith('08')) return reply('Contoh #add 6281290565513')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dha.groupAdd(from, [num])
						reply(`Sukses`)
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					
break
case 'setgrupname':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              dha.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              
break
case 'readmore':

			    	case 'more':

			if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`Terjadi kesalahan`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    
break
case 'persengay':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				if (!q) return reply('tag temanmu!')
				rate = args.join(' ')
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan*","83%\n\n Yaallah Nak","97%\n\nAstagfirullah","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu","29%\n\n amann:v","94%\n\n Yaallah","75%\n\nHadehh Gay","82%\n\nMending Lu Tobat Dah","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				dha.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				
break
case 'persenganteng':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				ganteng = body.slice(12)
				const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				dha.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
				
break
case 'persencantik':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
				if (!q) return reply(`Tag teman mu!`)
				cantik = args.join(' ')
				const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik','70% Hai Ukhty','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat']
				const tik = can[Math.floor(Math.random() * can.length)]
				dha.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
				
break
case 'wiki':

reply(mess.wait)
if (args.length < 1) return reply(mess.wrongFormat)
teks = args.join(' ')
ressss = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${ressss[0].judul}
*Wiki :* ${ressss[0].wiki}`
sendFileFromUrl(ressss[0].thumb, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: result}).catch(e => {
  reply(result)
})

break
case 'bucin':

					const katakata = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]
                    const hata = katakata[Math.floor(Math.random() * katakata.length)]
				buttons = [{buttonId:`${prefix}bucin`,buttonText:{displayText:'Try Again'},type:1}]
               buttonsMessage = { contentText: `${hata}`, footerText: `WhatsApp - bot`,  buttons: buttons, headerType: 1 }
               prep = await dha.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
               dha.relayWAMessage(prep)
					
break
case 'yts':
 case 'ytsearch':

              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
Title : ${i.title}
Views : ${i.views}
Upload : ${i.ago}
Durasi : ${i.timestamp}
Channel : ${i.author.name}
Link : ${i.url}\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               
break
case 'kick':

             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang! contoh : @namatarget')
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             
break
case 'suit':
 //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              
break
                   case 'tiktokdl':
                   case 'tiktoknowm':

if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(`Error cuy`)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)

break
case 'tiktokaudio':

if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(`Error cuy`)
})
console.log(res)
            ran = getRandom('.mp4')
            encmedia = (res.result.nowatermark)
             media = await dha.downloadAndSaveMediaMessage(encmedia)
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(ran)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })

break
case 'slot':

              const sotoy = ['🍊 : 🍒 : 🍐','🍒 :🍇: 🍊',' 🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','?? : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  ?? | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              
break
case 'delete':
case 'del':
case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'hentai':

reply(mess.wait)
let data4 = (await fetchJson(`https://nekos.life/api/v2/img/hentai`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data4.url))
buttons = [{buttonId:`#hentai`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Hentai Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'trap':

reply(mess.wait)
let trap = (await fetchJson(`https://api.waifu.pics/nsfw/trap`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(trap.url))
buttons = [{buttonId:`#trap`,buttonText:{displayText:`⫹⫺ TRAP ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Trap Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'anjing':

reply(mess.wait)
let anjing = (await fetchJson(`https://nekos.life/api/v2/img/woof`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anjing.url))
buttons = [{buttonId:`#anjing`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Anjing', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'holo':

reply(mess.wait)
let holo = (await fetchJson(`https://nekos.life/api/v2/img/holo`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(holo.url))
buttons = [{buttonId:`#holo`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Holo Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'neko':

reply(mess.wait)
let data3 = (await fetchJson(`https://nekos.life/api/neko`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data3.neko))
buttons = [{buttonId:`#neko`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Neko Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'waifu':

reply(mess.wait)
let data = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.url))
buttons = [{buttonId:`#waifu`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Waifu Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'yuri':

reply(mess.wait)
let data2 = (await fetchJson(`https://nekos.life/api/v2/img/yuri`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data2.url))
buttons = [{buttonId:`#yuri`,buttonText:{displayText:`⫹⫺ YURI ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Yuri Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'cosplay':

reply(mess.wait)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(`https://api-aprilia-xyz.herokuapp.com/api/randomimage/cosplay`))
buttons = [{buttonId:`#cosplay`,buttonText:{displayText:`⫹⫺ COSPLAY ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Cosplay', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'milf':

reply(mess.wait)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(`https://api-aprilia-xyz.herokuapp.com/api/randomimage/milf`))
buttons = [{buttonId:`#milf`,buttonText:{displayText:`⫹⫺ MILF ⫹⫺`},type:1}]
imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Milf Anime', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
dha.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

break
case 'mute':

               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               
break
case 'grupsetting':

        case 'groupsetting':

               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group buka`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group tutup`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
        
             
break
case 'listprem':

       case 'listpremium':
          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              
break
case 'premium':
 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              
break
       case 'premiumcheck':

       case 'cekpremium':
 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              
break
case 'kick':

             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             
break
case 'leveling':


              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              
break
       case 'antilink':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              
break
case 'mathkuis':{
if (!isGroup) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let buh = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/kuis/math?mode=${q}&apikey=404Api`)
buh_result = buh.result
const petunjuknya = buh_result.jawaban.replace(/[0|1|2|3|4|5|6|7|8|9]/gi, '_')
 dha.sendMessage(from, `*Soal :* ${buh.result.soal} \nWaktu : ${gamewaktu}s\nPetunjuk : ${petunjuknya}`, MessageType.text, { quoted: mek, thumbnail: miku })
let anih = buh.result.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
	}
break
case 'level':
 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await dha.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              reply(teks)
              
break
       case 'leaderboard':
 //Cek Leaderboard
       case 'leaderboards':

              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              
break
case 'gelud':

               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               dha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               
break
case 'speed':

	case 'ping':

			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			reply(pingnya)
			})
			
break  
case 'welcome':

               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               
break
case 'group':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
gwetkkkke = await dha.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Group setting Open/Close`,
"footerText": `© Ochobot`,
"buttons": [
{buttonId: `${prefix}open`, buttonText: {displayText: 'OPEN'}, type: 1},
{buttonId: `${prefix}close`, buttonText: {displayText: 'CLOSE'}, type: 1}
],
headerType: 1
},
}, {quoted:mek})
await dha.relayWAMessage(gwetkkkke)

break
case 'open':

dha.groupSettingChange(from, GroupSettingChange.messageSend, false)

break
case 'close':

dha.groupSettingChange(from, GroupSettingChange.messageSend, true)

break
//case no api
case 'linkwa':

reply(mess.wait)
if (!q) return reply(`Example : ${prefix}${command} wibu`)
linkwa(`${q}`).then(res => {
f = ``
for (let i of res) {
f += `GroupWhatsApp
*Nama : ${i.nama}
*Link* : ${i.link}\n\n`
}
veler = f.trim()
reply(veler)
})

break
case 'playstore':

reply(mess.wait)
            if(!q) return reply(`Example : ${prefix}${command} ff`)
            let play = await playstore(q)
            let store = '\n'
            for (let i of play){
            store += `\n*[ _PLAY STORE_ ] *\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n`
            }
            reply(store)
            
break
//end
case 'ppcouple':

				num = `${sender.split("@")[0]}@s.whatsapp.net`
				kont = `Couple Cowonya\n*@${num.split('@')[0]}*`
				kint = `Couple Cewenya\n*@${num.split('@')[0]}*`
let ppcp = fs.readFileSync('./lib/couple.js');
jsonData = JSON.parse(ppcp);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
Laki = await getBuffer(randKey.male)
dha.sendMessage(from, Laki, image,  { caption: `${kont}`, quoted: mek, thumbnail: Buffer.alloc(0), contextInfo: { mentionedJid: [num]}})
Cewe = await getBuffer(randKey.female)
dha.sendMessage(from, Cewe, image, { caption: `${kint}`, quoted: mek, thumbnail: Buffer.alloc(0), contextInfo: { mentionedJid: [num]}})

break
case 'wallml':

let wallml = fs.readFileSync('./lib/wallml.js');
jsonData = JSON.parse(wallml);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
dha.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})

break
case 'public':

                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (banChats === false) return
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                setting.banChats = false
                banChats = false
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *PUBLIC-MODE* 」`)
                
break
        case 'self':

                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (setting.banChats === true) return
                setting.banChats = true
                uptime = process.uptime()
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                banChats = true
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *SELF-MODE* 」`)
                
break
      case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await dha.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await dha.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             dha.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
dha.sendMessage(_.jid, 
			{"contentText": `*「 Siaran Ochobot」*\n#Ijin Siaran\n*Isi Pesan :* ${body.slice(4)}`,
			"footerText": 'Ochobot',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "LIST MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
break
case 'owner':
            case 'developer':
            case 'author':

                dha.sendMessage(from, {displayname: "WandyGanz", vcard: vcard}, MessageType.contact, { quoted: mek})
                    .then((res) => dha.sendMessage(from, '*Tuh Kontak Orang Ganz >_<*', text, {quoted: res}))
                    
                
break
case 'tovideo':

               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               
break
case 'tomp3':

reply(mess.wait)
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            
break
case 'toimg':

              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              
break
case 'tinyurl':

reply(mess.wait)
if (args[0].startsWith('www')) return reply('Url harus berupa https://url')
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
console.log(anu.data)
} catch (e) {
emror = String(e)
reply(`${e}`)
}

break
case 'sticker':
					case 'stiker':
					case 's':

					reply(mess.wait)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await dha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											dha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await dha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											dha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						
break
case 'stikerwm':
case 'stickerwm':
    case 'swm':
    reply(mess.wait)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await dha.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            dha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sampah/data.exif', out, '-o', _out])
            .on('exit', () => {
            dha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await dha.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            dha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sampah/data.exif', out, '-o', _out])
            .on('exit', () => {
            dha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            
break
case 'exif':
                    if (!isOwner) return reply(mess.only.owner)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				
break
case 'siapakahaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              dha.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              
break
case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                const dataa = fs.readFileSync('./lib/tebakgambar.js');
                 jsonData = JSON.parse(dataa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 ini_image = randKey.result.soal
                    jawaban = randKey.result.jawaban
                    ini_buffer = await getBuffer(ini_image)
                    let kisikisi = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `*𝗧𝗘𝗕𝗔𝗞 𝗚𝗔𝗠𝗕𝗔𝗥*\n\n*Jawab Gk? Jawab Gk? Jawablah Masa Gitu Doang Gk Bisa Wkwk*\n\n𝙋𝙀𝙏𝙐𝙉𝙅𝙐𝙆 : ${kisikisi}\n\n_Menang Mendapatkan Balance_`}).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
              //        sleep(30000)
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
case 'donasi':
reply(`Donasi seiklasnya\nPulsa : 082125039170`)
break
case 'tictactoe':
        case 'ttt':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              dha.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              
break
case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               
break
case 'limitgame':
        case 'balance':
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               
break
case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              teksnya = `*[ PRICE LIST ]*
*Sewa Bot Ochobot*
*1 Hari :* 2K
*1 Minggu :* 10K
*1 Bulan :* 20K
*Minat untuk Sewa Bot?* Chat Owner!
*Dengan cara, Ketik* ${prefix}owner *Ya!*`
              reply(teksnya)
break
case 'addcmd':
 
       case 'setcmd':

              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              
break
       case 'delcmd':

              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              
break
       case 'listcmd':

              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              
break
case 'truth':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek, thumbnail: Buffer.alloc(0) })
					
break
case 'join':

if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply('pastikan link sudah benar!')
            var response = await dha.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
            
break
case 'setbio':

				if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					dha.setStatus(`${iyek}`)
					reply(`Sukses menganti bio ke : ${iyek}`)
					
break
case 'setnamebot':

					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					name = args.join(' ')
					reply(`「❗」Nama Bot berhasil di ubah menjadi : ${name}`)
					
break 
case 'pacaran':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					jds = []
					const jodohnya = groupMembers
					const pasangannya = groupMembers
					bokiiii = pasangannya[Math.floor(Math.random() * pasangannya.length)]
					const akiiii = jodohnya[Math.floor(Math.random() * jodohnya.length)]
					teks = `Suttt!!, ada yg lagi pacaran!\n@${akiiii.jid.split('@')[0]} Love @${bokiiii.jid.split('@')[0]} \nCIE CIE`
					jds.push(akiiii.jid, bokiiii.jid)
					mentions(teks, jds, true)
					
break
case 'jadian':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					jds = []
					const blok = groupMembers
					const ayos = groupMembers
					const bakiii = blok[Math.floor(Math.random() * blok.length)]
					teks = `cie yang baru jadian\n@${bakiii.jid.split('@')[0]}\nSemoga Langgeng`
					jds.push(bakiii.jid)
					mentions(teks, jds, true)
					
break
case 'dare':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					daree = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dha.sendMessage(from, daree, image, { quoted: mek, thumbnail: Buffer.alloc(0), caption: '*Dare*\n\n'+ der })
					
break
case 'rate':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
		            query = args.join(" ")
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${te}`
					reply(caption)
					
break
case 'bagaimanakah':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
		            query = args.join(" ")
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${mana}`
					reply(caption)
					
break
case 'apakah':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					query = args.join(" ")
                    apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${kah}`
					reply(caption)
					
break
case 'kapankah':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					query = args.join(" ")
                    kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${koh}`
					reply(caption)
					
break
case 'bisakah':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
					query = args.join(" ")
                    bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					caption = `pertanyaan: ${command} ${query}\njawaban: ${keh}`
					reply(caption)
					
break
case 'ban':

					dha.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					
break
case 'readall':

              if (!isOwner) return reply(mess.only.owner)
              totalchat.map( async ({ jid }) => {
              await dha.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              
break
				case 'unban':

					if (!isOwner)return reply(mess.only.owner)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					
break
case 'cekwatak':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              var namao = pushname
              var prfx = await dha.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              
break
case 'menu':
a = '```'
gambar = fs.readFileSync('./logo.jpg')
privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
totalCht = await dha.chats.all()
groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
timestampe = speed();
latensie = speed() - timestampe
let levelmu = level.getLevelingLevel(sender, _level)
let mu2Xp = level.getLevelingXp(sender, _level)
let muXp = 10 * Math.pow(levelmu, 2) + 50 * levelmu+ 100
let rolemu = level.getUserRank(sender, _level)
var statuss = 'Not Premium'
if (isPremium) {
statuss  = 'PREMIUM'
}
teks = `
╭─⬣「 *You Info* 」⬣
├ *Name* : ${pushname}
├ *Number* : ${sender.split('@')[0]}
├ *Status* : ${statuss}
├ *Xp* : ${mu2Xp} / ${muXp}
├ *Level* : ${levelmu}
├ *Role* : ${rolemu}
└⬣

╭─⬣「 *Bot Info* 」⬣
├ *Name Bot* : ${botname}
├ *Name Owner* : ${ownername}
├ *Prefix* : ${prefix}
├ *Hit today* : ${hit_today.length}
├ *Runtime* : ${runtime(process.uptime())}
├ *Speed* : ${latensie.toFixed(4)} _Second_
├ *Server* : https://pm2.io
└⬣

╭─⬣「 *Main Fitur* 」⬣
│${prefix}afk <alasan>
│${prefix}waktu
│${prefix}chat <628|teks>
│${prefix}sewabot
│${prefix}speed
│${prefix}tag <628xxx>
│${prefix}jadibot
│${prefix}listjadibot
│${prefix}stopjadibot
│${prefix}bugreport <masalah>
│${prefix}join <link group>
└⬣

╭─⬣「 *Owner Menu* 」⬣
│${prefix}ban <@tag>
│${prefix}unban <@tag>
│${prefix}self
│${prefix}public
│${prefix}restart
│${prefix}upswteks <teks>
│${prefix}shutdown
│${prefix}spam <teks|jumlah>
│${prefix}nano <nama file>
│${prefix}readall
│${prefix}delchat
│${prefix}clearall
│${prefix}setppbot <reply image>
│${prefix}setnamabot <nama>
│${prefix}setbio <teks>
└⬣

╭─⬣「 *Group Menu* 」⬣
│${prefix}groupsetting
│${prefix}listonline
│${prefix}infogroup
│${prefix}getbio <@tag>
│${prefix}tagall
│${prefix}caripesan <pesan|12>
│${prefix}tagme
│${prefix}resetlink
│${prefix}leave
│${prefix}linkgroup
│${prefix}getpp <@tag>
│${prefix}stickertag <replysticker>
│${prefix}hidetag <teks>
│${prefix}setdesc <teks>
│${prefix}sider <reply pesan bot>
│${prefix}add <628>
│${prefix}setppgrup <reply img>
│${prefix}setgrupname <name>
│${prefix}kick <@tag>
│${prefix}delete <tag pesan bot>
└⬣

╭─⬣「 *Search Menu* 」⬣
│${prefix}linkwa <nama group>
│${prefix}ppcouple
│${prefix}stickersearch <namasticker>
│${prefix}sfile <nama file>
│${prefix}artinama <nama>
│${prefix}google <query>
│${prefix}inspect <linkwa>
│${prefix}chara <naruto>
│${prefix}gimage <naisa>
│${prefix}anjing
│${prefix}artikata <teks>
│${prefix}pinterest <nama img>
│${prefix}bucin
│${prefix}quotes
│${prefix}shoppe <product>
│${prefix}wiki <query>
│${prefix}readmore <teks|teks>
│${prefix}ytsearch <nama video>
│${prefix}playstore <nama aplikasi>
└⬣

╭─⬣「 *Maker Menu* 」⬣
│${prefix}sumer <teks>
│${prefix}golden <teks>
│${prefix}butter <teks>
│${prefix}coffe <teks>
│${prefix}wolf <teks>
│${prefix}love <teks>
│${prefix}neon <teks>
│${prefix}neonlight <teks>
│${prefix}love2 <teks>
│${prefix}tahta <teks>
│${prefix}vintage <teks>
│${prefix}stars <teks>
│${prefix}spary <teks>
│${prefix}sweet <teks>
│${prefix}grass <teks>
│${prefix}pornhub <teks/teks>
│${prefix}wood <teks>
│${prefix}burn <teks>
│${prefix}text3d <teks>
│${prefix}underwhite <teks>
│${prefix}smoke <teks>
│${prefix}fur <teks>
│${prefix}melon <teks>
│${prefix}candy <teks>
│${prefix}matrix <teks>
│${prefix}cake <teks>
│${prefix}striking <teks>
│${prefix}wooden <teks>
│${prefix}scary <teks>
│${prefix}rainbow <teks>
│${prefix}army <teks>
│${prefix}blackpink <teks>
│${prefix}underwater <teks>
│${prefix}flaming <teks>
│${prefix}romantic <teks>
│${prefix}naruto <teks>
│${prefix}cup <teks>
│${prefix}crisp <teks>
│${prefix}shadow <teks>
│${prefix}crismas <teks>
│${prefix}deep <teks>
│${prefix}glitch <teks/teks>
└⬣

╭─⬣「 *Anime Menu* 」⬣
│${prefix}hentai
│${prefix}neko
│${prefix}wallml
│${prefix}quotesanime
│${prefix}waifu
│${prefix}yuri
│${prefix}patrick
│${prefix}lolivideo
│${prefix}doge
│${prefix}wallpaper
│${prefix}loli
│${prefix}animestick
│${prefix}gura
│${prefix}holo
│${prefix}husbu
│${prefix}trap
│${prefix}cosplay
│${prefix}milf
│${prefix}naruto
└⬣

╭─⬣「 *News Menu* 」⬣
│${prefix}covid
│${prefix}trendtwit
│${prefix}indozone
│${prefix}infocuaca <daerah>
│${prefix}kompas
│${prefix}infogempa
└⬣

╭─⬣「 *Islamic Menu* 」⬣
│${prefix}alquran
│${prefix}tahlil
│${prefix}surah <nomor>
└⬣

╭─⬣「 *Tools Menu* 」⬣
│${prefix}tinyurl <url>
│${prefix}get <url>
│${prefix}bass <reply audio>
│${prefix}balik <reply audio>
│${prefix}semoji <emote>
│${prefix}sticker <image>
│${prefix}swm <image>
│${prefix}igstalk <username>
│${prefix}toimg <sticker>
│${prefix}imgtourl <image>
│${prefix}imgtourl2 <image>
│${prefix}tomp3 <video>
│${prefix}tovideo <sticker>
└⬣

╭─⬣「 *Game Menu* 」⬣
│${prefix}mining
│${prefix}slot
│${prefix}jadian
│${prefix}babi
│${prefix}bego
│${prefix}tolol
│${prefix}pinter
│${prefix}pintar
│${prefix}asu
│${prefix}bodoh
│${prefix}gay
│${prefix}lesby
│${prefix}bajingan
│${prefix}jancok
│${prefix}anjing
│${prefix}ngentod
│${prefix}ngentot
│${prefix}monyet
│${prefix}mastah
│${prefix}newbie
│${prefix}bangsat
│${prefix}bangke
│${prefix}sange
│${prefix}sangean
│${prefix}dakjal
│${prefix}horny
│${prefix}wibu
│${prefix}puki
│${prefix}pantek
│${prefix}beban
│${prefix}fitnah
│${prefix}limitgame
│${prefix}persengay <nama>
│${prefix}persenganteng <nama>
│${prefix}persencantik <nama>
│${prefix}tebakgambar
│${prefix}tictactoe <@tag>
│${prefix}cekmati <nama>
│${prefix}cekwatak
│${prefix}pacaran
│${prefix}truth
│${prefix}dare
│${prefix}apakah <pertanyaan>
│${prefix}bagaimanakah <pertanyaan>
│${prefix}kapankah <pertanyaan>
│${prefix}bisakah <pertanyaan>
│${prefix}rate <sesuatu>
└⬣

╭─⬣「 *Downloader Menu* 」⬣
│${prefix}tiktokdl <url>
│${prefix}igdl <url>
│${prefix}play <judul>
│${prefix}video <judul>
└⬣

*Regards : WanduGans*

Donasi : 082125039170 pulsa
`
teks2 = ``
but = [
          { buttonId: `${prefix}rules`, buttonText: { displayText: `𝑺𝑪𝑹𝑰𝑷𝑻 𝑩𝑶𝑻` }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: `𝑶𝑾𝑵𝑬𝑹` }, type: 1 }
        ]
        sendButLocation(from, teks, teks2, gambar, but)
break
case 'cekmati':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              
break
case 'mining':

if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              
break
case 'afk':
 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              
break
case 'waktu':

              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              
break
default:
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   dha.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		dha.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
dha.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
                  }


		if (budy.startsWith(`Bot`)) {

                  reply(`Hi ${pushname}, Saya bot ketik #menu untuk menggakses`)

                  }
              
              if (budy.startsWith(`P`)) {

                  reply(`Hi ${pushname}, Saya bot ketik #menu untuk menggakses`)

                  }
                  


       if (budy.includes(`@6282125039170`)) {
reply(`Iya saya bot, ada apa?`)
                  }


       if (budy.includes(`@6281290565513`)) {
       reply(`Apa sih tag tag Owner aku_-`)
       }
                  
                  if (body.startsWith(`${prefix + command}`)) {
gambar = fs.readFileSync('./Ndy.jpg')
teks = `Maaf Fitur ${prefix}${command} tidak terdaftar di database bot!`
teks2 =
`Click button dibawa untuk mengakses menu`
but = [
          { buttonId: `#menu`, buttonText: { displayText: '👉MENU' }, type: 1 }
        ]
        sendButLocation(from, teks, teks2, gambar, but)
                 }
                if (budy.startsWith('$')) {
	              if (!isOwner) return
	              console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                  exec(budy.slice(2), (err, stdout) => {
				  if (err) return textImg(`${err}`)
				  if (stdout) textImg(`${stdout}`)
				  })
				  }

		if (budy.includes(`Assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }
	} 
	
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
	dha.sendMessage(`6281290565513@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {quoted: mek})
        }
	}
}



