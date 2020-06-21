import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);
app.use((req, res) => res.status(404).send(`
    Rota não identificada, por favor use: <br/>
    ${req.baseUrl}/ <br/>
    ${req.baseUrl}/countries <br/>
`))

app.listen(process.env.PORT || 3500)