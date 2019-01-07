/*eslint-disable */

import axios from 'axios'

export const baseURL = 'http://localhost:8080'
export const instance = () => {
    let instance = axios.create({
        baseURL: baseURL,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
    return instance
}

export const get = (path, config) => {
    return instance().get(path, config)
}

export const post = (path, body, config) => {
    return instance().post(path, body || {}, config)
}

export const put = (path, body, config) => {
    return instance().put(path, body || {}, config)
}

export const destroy = (path, config) => {
    return instance().delete(path, config)
}
