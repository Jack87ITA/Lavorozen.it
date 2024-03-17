import { api } from './config/axiosConfig.js'
import { defineCancelApiObject } from './config/axiosUtils.js'

export const AuthAPI = {
    postLogin: async (data, cancel = false) => {
        const response = await api.request({
            url: '/authUser',
            method: 'POST',
            data: data,
            signal: cancel
                ? cancelApiObject[this.get.name].handleRequestCancellation()
                      .signal
                : undefined,
        })

        return response.data
    },

    postCreateUser: async (data, cancel = false) => {
        const response = await api.request({
            url: '/createUser',
            method: 'POST',
            data: data,
            signal: cancel
                ? cancelApiObject[this.get.name].handleRequestCancellation()
                      .signal
                : undefined,
        })

        return response.data
    },
}

const cancelApiObject = defineCancelApiObject(AuthAPI)
