import express from 'express'
import WageController from './controller/wage-controller'
import CountryController from './controller/country-controller'

const routes = express.Router()

routes.get('/api/wages', WageController.list)
routes.get('/api/countries', CountryController.getCountries)
routes.get('/api/bmi', CountryController.getBigMacIndex)
routes.get('/api/country-info', CountryController.getCountryInfo)

export default routes