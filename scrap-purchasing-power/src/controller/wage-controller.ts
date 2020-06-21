import WageService from '../service/wage-service'

const list = (req, res) => {
    WageService.getWages()
        .then(value => res.json(value))
        .catch(err => console.log(err))
}

export default {
    list
}