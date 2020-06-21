import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL)
const expirationTime = 24 * 60 * 60; // 1 dia

const getWageCache = async (): Promise<any> => {

    const exists = await redis.exists('wage_list')

    if (exists) {
        const wageList = await redis.get('wage_list')
        return JSON.parse(wageList)
    }

    return null
}

const saveWageCache = (wageList: string) => {
    redis.set('wage_list', JSON.stringify(wageList), 'EX', expirationTime).then(result => {
        console.log(`Cache salvo ${result}`)
    }).catch(err => {
        console.log(err)
    })
}

export default {
    getWageCache,
    saveWageCache
}
