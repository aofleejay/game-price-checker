const puppeteer = require('puppeteer')

const GAME_WISHLIST = 'zelda'

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://eshop-prices.com/?currency=THB')
  await page.type('input[name=q]', GAME_WISHLIST)
  const element = await page.$('.l')
  const price = await page.evaluate(element => element.textContent, element)
  console.log(price)

  await browser.close()
}

main()
