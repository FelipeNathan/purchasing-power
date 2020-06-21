import api from './api-service'

export const getWages = () => api.get('/wages')
export const getCountries = () => api.get('/countries')
export const getBMI = (filter) => api.get(`/bmi?${normalizeFilter(filter)}`)
export const getCountryInfo = (filter) => api.get(`/country-info?${normalizeFilter(filter)}`)

export function normalizeFilter(filter) {

    let filterStr = ''

    for (const f in filter) {
        filterStr += `&${f}=${filter[f]}`
    }

    return filterStr
}