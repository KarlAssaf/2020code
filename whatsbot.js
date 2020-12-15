var puppeteer = require("puppeteer")
async function scrape(url) {
var browser = await puppeteer.launch({headless:false})
var page = await browser.newPage();
await page.goto(url)
await page.setDefaultTimeoutNavigation(0)
await page.waitForSelector("._1GGbM > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)")
var jeny = await page.$("._1GGbM > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)")
await jeny.click()
var textbox = await page.$("#pane-side > div:nth-child(1) > div > div > div:nth-child(13) > div > div > div._1C6Zl > div._7W_3c > div.fqPQb > span > span")
var msg = 1
await textbox.type("jef")
}
scrape("https://web.whatsapp.com/")
