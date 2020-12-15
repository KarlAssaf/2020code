var puppeteer = require("puppeteer")
async function scrape(url) {
var browser = await puppeteer.launch({headless: true})
var page = await browser.newPage()
await page.setDefaultNavigationTimeout(0)
await page.goto(url , {"waitUntill": "networkidle0"})
await page.setDefaultNavigationTimeout(0)
var imgs = await page.evaluate(function () {
var image = document.querySelectorAll("div > a:nth-child(1) > div:nth-child(1) > img:nth-child(1)")
numb = 0
var all = []
while(numb < 80){
all.push(image[numb].src)
console.log(image[numb].src)
numb++
}
return all
})
console.log(imgs.length)
var numb2 = 0;
async function jeff(){
var pg = await browser.newPage()
await page.setDefaultNavigationTimeout(0);
await pg.goto("https://base64.guru/tools/data-url-to-image")
await pg.waitForSelector("#form-base64-tools-data-url-to-image-base64")
var box = await pg.$eval("#form-base64-tools-data-url-to-image-base64" , (el , img) => el.value = img , imgs[numb2])
var cn = await pg.$("#form-base64-tools-data-url-to-image-decode")
await cn.click()
await pg.waitForSelector(".preview-info > a:nth-child(5)")
var save = await pg.$(".preview-info > a:nth-child(5)")
await save.click()
await pg.keyboard.press("Enter")
await numb2++
await pg.close()
await jeff()
} 
jeff();
}
scrape("https://www.google.com/search?q=voiture+sur+la+route&tbm=isch&ved=2ahUKEwilrJSXnNDtAhWBxOAKHcu4DxQQ2-cCegQIABAA&oq=voiture+sur+la+route&gs_lcp=CgNpbWcQAzICCAAyBAgAEB4yBAgAEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB5Q0SZYijlg4DxoAHAAeACAAZABiAGnDJIBBDAuMTOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=OMvYX6WwF4GJgwfL8b6gAQ&bih=662&biw=1299&client=ubuntu")
scrape("https://www.google.com/search?q=voiture&tbm=isch&ved=2ahUKEwiA5f2bnNDtAhUo2OAKHRzkARQQ2-cCegQIABAA&oq=voiture&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABAeOgYIABAFEB46BggAEAgQHlCRjwNYzJsDYN-dA2gAcAB4AIABhQGIAdYLkgEEMC4xM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=QsvYX4C8HqiwgwecyIegAQ&bih=662&biw=1299&client=ubuntu")
