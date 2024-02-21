import { api } from "./config/axiosConfig.js";
import { defineCancelApiObject } from "./config/axiosUtils.js";

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization": "Bearer " + localStorage.getItem("token")
};

export const UserAPI = {

    postAddFriend: async (data, cancel = false) => {

        const response = await api.request({
            url: "/addFriend",
            method: "POST",
            data: data,
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getFriends: async (cancel = false) => {
        const response = await api.request({
            url: "/getFriends",
            method: "GET",
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postAddExpense: async (data, cancel = false) => {

        const response = await api.request({
            url: "/createExpense",
            method: "POST",
            data: data,
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getExpenseByFriendId: async (friendId, cancel = false) => {
        const response = await api.request({
            url: "/getExpenses/" + friendId,
            method: "GET",
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    getDashboard: async (cancel = false) => {
        const response = await api.request({
            url: "/dashboard",
            method: "GET",
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    getNotifications: async (cancel = false) => {
        const response = await api.request({
            url: "/notifications",
            method: "GET",
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postMarkNotificationAsRead: async (cancel = false) => {

        const response = await api.request({
            url: "/notifications/readall",
            method: "POST",
            headers: headers,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    }


}

const cancelApiObject = defineCancelApiObject(UserAPI);
