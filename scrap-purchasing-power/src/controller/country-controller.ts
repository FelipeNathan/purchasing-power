import repository from '../repository/country-repository'
import service from '../service/quandl-api-service'
import WageService from '../service/wage-service'

const getCountries = (req, res) => {
    res.json(repository.getAllCountries());
}

const getBigMacIndex = async (req, res) => {

    const limit = req.query.limit || 1
    const country = await service.getBMI(req.query.country, limit)

    res.json(country)
}

const getCountryInfo = async (req, res) => {

    console.log(req.query);
    console.log(req.query.country);
    const countries = repository.getAllCountries()
    const countryName = countries.filter(c => c.abbrev === req.query.country)[0].name
    const countriesWages = await WageService.getWages()

    let countryWage = countriesWages.filter(info => info.country.toLowerCase() === countryName.toLowerCase());

    if (countryWage) {
        countryWage = countryWage[0]

        if (req.query.country === "BRA") {
            const brazilianWages = await service.getBrazilianWages()
            countryWage.date = brazilianWages.data[0][0].split('-')[0]
            countryWage.minWage = brazilianWages.data[0][1]
        }
    }

    const countryBmi = await service.getBMI(req.query.country, req.query.limit || 1)

    const countryBmiParsed = parseBmi(countryBmi)

    res.send({
        ...countryWage,
        bmi: countryBmiParsed,
        data: countryBmi.data
    })
}

const parseBmi = (countryMbi) => {
    const parse = {}
    countryMbi.data[0].map((value, index) => parse[countryMbi.columns[index]] = value)
    return parse
}


export default {
    getCountries,
    getBigMacIndex,
    getCountryInfo
}