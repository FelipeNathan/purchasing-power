import axios from 'axios';
import { QuandlResponse } from '../model/quandl';

const quandlBaseUrl = 'https://www.quandl.com/api/v3/datasets';

const getBMI = async (countryAbbrev: string, limit: number = 1) => {

    const bmiCountry = await axios.get<QuandlResponse>(`${quandlBaseUrl}/ECONOMIST/BIGMAC_${countryAbbrev}/data.json?limit=${limit}&api_key=${process.env.QUANDL_API_KEY}`)

    return {
        columns: bmiCountry.data.dataset_data.column_names,
        data: bmiCountry.data.dataset_data.data
    }
}

const getBrazilianWages = async (limit: number = 1) => {
    const response = await axios.get<QuandlResponse>(`${quandlBaseUrl}/BCB/1619/data.json?limit=${limit}&api_key=${process.env.QUANDL_API_KEY}`)
    return {
        columns: response.data.dataset_data.column_names,
        data: response.data.dataset_data.data
    }
}

export default {
    getBMI,
    getBrazilianWages
}