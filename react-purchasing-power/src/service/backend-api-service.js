import api from './api-service'

export const getWages = () => api.get('/v1/wage')
export const getCountries = () => api.get('/v1/country')
export const getBMI = (filter) => api.get(`/v1/country/bmi?${normalizeFilter(filter)}`)
export const getCountryInfo = (filter) => api.get(`/v1/country/info?${normalizeFilter(filter)}`)

export function normalizeFilter(filter) {

    let filterStr = ''

    for (const f in filter) {
        filterStr += `&${f}=${filter[f]}`
    }

    return filterStr
}