var puppeteer = require("puppeteer")
var fs = require("fs")
function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

async function scrape(url) {
var browser = await puppeteer.launch({headless: true})
var page = await browser.newPage()
await page.setDefaultNavigationTimeout(0)
await page.goto(url)
await page.evaluate(function(){setInterval(function() {
document.scrollingElement.scrollBy(0 , 50000)
} , 2000)})
await page.waitForSelector(".mye4qd" , {visible: true})
var more = await page.$(".mye4qd")
await more.click()
await delay(6000)
var imgs = await page.$$("div > a:nth-child(1) > div:nth-child(1) > img:nth-child(1)")
var numb = 0
await setInterval(function() {imgs[numb].screenshot({path: "/home/carl/nodelearn/imgs/image" + numb + ".png"})
numb++
} , 2000)
}
scrape("https://www.google.com/search?q=voiture&tbm=isch&ved=2ahUKEwiA5f2bnNDtAhUo2OAKHRzkARQQ2-cCegQIABAA&oq=voiture&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABAeOgYIABAFEB46BggAEAgQHlCRjwNYzJsDYN-dA2gAcAB4AIABhQGIAdYLkgEEMC4xM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=QsvYX4C8HqiwgwecyIegAQ&bih=662&biw=1299&client=ubuntu")














































