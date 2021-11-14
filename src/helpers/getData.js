import { services } from '../data/services.js'

export const getData = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(services)
        }, 2000)
    })
}
