import puppeteer from 'puppeteer';
import WageRepository from '../repository/wage-repository'

const getWages = async () => {

    let wages = await WageRepository.getWageCache()

    if (!wages) {

        wages = await scrapWages()
        normalize(wages)

        WageRepository.saveWageCache(wages)
    }

    return wages
}

const scrapWages = async (): Promise<any> => {

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()

    let wageList = []

    try {

        await page.goto('https://pt.countryeconomy.com/mercado-laboral/salario-minimo-nacional', { timeout: 0 })

        await page.waitForSelector('#tb1 > tbody')

        wageList = await page.evaluate(() => {
            const content: {}[] = []

            document.querySelectorAll('#tb1 > tbody > tr').forEach(row => {
                content.push({
                    country: row.childNodes[0].textContent,
                    date: row.childNodes[1].textContent,
                    minWage: row.childNodes[2].textContent,
                    symbol: row.childNodes[3].textContent,
                })
            })
            return content
        })

        return wageList

    } catch (e) {

        console.log(e)

    } finally {

        await page.close()
        await browser.close()
    }

    return wageList
}

const normalize = (wageList) => {
    wageList.forEach(row => {
        row.minWage = convertToNumber(row.minWage)
        row.country = row.country.replace(/\s?\[\+\]/g, '')
    })
}

const convertToNumber = (value: string) => {
    return parseFloat(value.replace('.', '').replace(',', '.'))
}

export default {
    getWages
}