/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * 
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
*/

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //===> WEB APIKEY
    global.APIs = {
	alphaapi: 'https://api-alphabot.herokuapp.com',
    }
    
    //===> APIKEY 
    global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
    }
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner}`,`${setting.nomerowner}`]
    global.packname = `${setting.namaowner}`
    global.author = `© ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = '⭔'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: '𝐋𝐔 𝐀𝐃𝐌𝐈𝐍? 🤨',
    botAdmin: '𝐁𝐎𝐓 𝐁𝐔𝐊𝐀𝐍 𝐀𝐃𝐌𝐈𝐍 😔',
    owner: '𝐋𝐔 𝐁𝐔𝐊𝐀𝐍 𝐎𝐖𝐍𝐄𝐑 𝐆𝐖 😠',
    group: '𝐊𝐇𝐔𝐒𝐔𝐒 𝐆𝐑𝐎𝐔𝐏 𝐍𝐆𝐀𝐁 😏',
    private: '𝐊𝐇𝐔𝐒𝐔𝐒 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐂𝐇𝐀𝐓 𝐁𝐀𝐍𝐇',
    bot: '𝐊𝐇𝐔𝐒𝐔𝐒 𝐏𝐄𝐍𝐆𝐆𝐔𝐍𝐀 𝐍𝐎𝐌𝐄𝐑 𝐁𝐎𝐓',
    wait: '𝐋𝐎𝐀𝐃𝐈𝐍𝐆...',
    done: '𝐃𝐎𝐍𝐄 𝐍𝐆𝐀𝐁 🤗',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
