import { api } from "./config/axiosConfig.js";
import { defineCancelApiObject } from "./config/axiosUtils.js";


export const InputAPI = {

    postGetResult: async (data, cancel = false) => {
        const response = await api.request({
            url: "/input",
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

}

const cancelApiObject = defineCancelApiObject(InputAPI);
