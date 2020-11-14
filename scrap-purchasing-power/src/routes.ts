import express from 'express'
import WageController from './controller/wage-controller'

const routes = express.Router()

routes.get('/api/wages', WageController.list)

export default routes