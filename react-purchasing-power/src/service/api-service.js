import axiosRetry from 'axios-retry'
import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_SCRAP_API}/api`

var api = axios.create({
    baseURL: baseUrl
})

axiosRetry(api, {
    retries: 10,
    retryDelay: axiosRetry.exponentialDelay,
    shouldResetTimeout: true
})

export default api