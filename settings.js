const fs = require('fs');
const chalk = require('chalk');
/*
 * Create By Sych
 * Follow https://github.com/sychdev
 * Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
 */
//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\
global.own = ['917907635894', '0']
global.owner = ['917907635894', '917907635894']
global.packname = 'a3h1nav.xd'
global.author = 'cyber.369'
global.owname = '@abhinav'
global.botname = 'a3h1nav.xd'
global.listprefix = ['+', '!', '.']
global.themeemoji = '🪀'
global.f = '> '
global.n = '`'
global.listv = ['⛏', '●', '■', '✿', '▲', 'ଳ', 'ϟ', '✶', '➤', '✦', '✧', '△', '❀', '⋆𖦹', '□', '𖤓', 'ᨒ', '◇', '𖣂', '々', '〆', 'ᯓ★', '꩜', '✮']
global.emot = ['🌱', '🌻', '🌞', '❄️', '🌿', '💫', '⭐', '🍃', '🔥', '⚡', '🫧', '🌵', '🪺', '🪨', '🪵', '🌪️', '🍄']
global.tempatDB = 'database.json'
global.pairing_code = true
global.fake = {
	texz: `Owner: ${owname}\nBot: ${botname}`,
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://i.ibb.co.com/3rqCPX6/fk.jpg',
	thumbnail: fs.readFileSync('./src/media/sych.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
}
global.my = {
	yt: 'https://www.youtube.com/@cyber360opz',
	gh: 'https://github.com/cyber360mods',
	gc: 'https://chat.whatsapp.com/Hx9vcBVhbc04KLGPFtH2R',
	ch: '120363383347233294@newsletter',
}
global.limit = {
	free: 999,
	premium: 999,
	vip: 'VIP'
}
global.uang = {
	free: 100000,
	premium: 1000000,
	vip: 10000000
}
global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'lu bkn owner',
	admin: 'lu bkn atmin',
	botAdmin: 'gw bkn atmin bro',
	group: 'cma buat grup aj',
	private: 'cm di prvt cht',
	prem: 'lu bkn user premium',
	wait: 'bentar duluu',
	error: 'eror bro!',
	done: 'udh lunas yh'
}
global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
