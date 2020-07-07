const { Telegraf } = require('telegraf')
const request = require('request')

const bot = new Telegraf(process.env.Bot_TOKEN)

var defaultLimit = 5

bot.start((ctx) => ctx.reply("Hi There!\nUse /news command to fetch top news\n eg: /news\n /categories to see all categories\nUse /limt"))

bot.command('limit',(ctx) => {
    var curStatus = "Currently article Limit is " + String(defaultLimit) + "\nTo change it use /limit 'x' command where x is an integer\nEG: /limit 10"
    ctx.reply(curStatus)
    var searchQuery = ctx.message.text.slice(7)
    if(searchQuery){
        defaultLimit = parseInt(searchQuery)
        var msg = String(defaultLimit) + " is now default Limit."
        ctx.reply(msg)
    }
})

bot.command('help', (ctx)=>{
    ctx.reply("Use /news command to fetch top news\n eg: /news \n/categories command to display all categories\n /limit command to change limit, By default its 5. \n eg: /limit 10")
})

bot.command('news', (ctx)=>{
    var url = process.env.apiUrl + 'all'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('national', (ctx)=>{
    var url = process.env.apiUrl + 'national'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('business', (ctx)=>{
    var url = process.env.apiUrl + 'business'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('sports', (ctx)=>{
    var url = process.env.apiUrl + 'sports'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('world', (ctx)=>{
    var url = process.env.apiUrl + 'world'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('politics', (ctx)=>{
    var url = process.env.apiUrl + 'politics'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('technology', (ctx)=>{
    var url = process.env.apiUrl + 'technology'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('startup', (ctx)=>{
    var url = process.env.apiUrl + 'startup'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('entertainment', (ctx)=>{
    var url = process.env.apiUrl + 'entertainment'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('science', (ctx)=>{
    var url = process.env.apiUrl +'science'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('automobile', (ctx)=>{
    var url = process.env.apiUrl + 'automobile'
    request({url: url,json: true}, (error,response)=>{
        var newsArray = response.body.articles
        for(i=0; i<defaultLimit; i++){
            news = String(newsArray[i]["title"].trimStart().trimEnd()) + ":\n" + String(newsArray[i]["description"]) + "\n\nRead More: " + String(newsArray[i]["read_more"])
            ctx.reply(news)
        }
    })
})

bot.command('categories', (ctx)=>{
    ctx.reply("To fetch news of a particular category use /'category' \nEg:\n /national\n /business\n /sports\n /world\n /politics\n /technology\n /startup\n /entertainment\n /science\n /automobile\n")
})

bot.launch()
