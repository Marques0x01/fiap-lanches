import { IHttpClient } from "../../configurations/http/IHttpClient";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { IOrderHttp } from "../interfaces/IOrderHttp";

class OrderHttp implements IOrderHttp {

    defaultPath = "https://s7gj6mrxe0.execute-api.us-east-1.amazonaws.com/prod/fiap-lanches"

    async createOrder(order: any, httpClient: IHttpClient) {
        return await httpClient.post(this.defaultPath + "/order", order).then(resp => {
            return resp.data
        }).then(data => {
            return data.orderId
        }).catch(err => {
            console.log("Error in calling order API")
            console.log(err)
            throw new Error("Error in calling order API");
        })
    }

    async getAllUnfinishedOrders(httpClient: IHttpClient) {
        return await httpClient.get(this.defaultPath + "/order/unfinished").then(resp => {
            return resp.data
        }).then(data => {
            return data
        }).catch(err => {
            console.log("Error in calling order API")
            console.log(err)
            throw new Error("Error in calling order API");
        })
    }
    async getOrderByStatus(status: EOrderStatus, httpClient: IHttpClient) {
        return await httpClient.get(this.defaultPath + "/order" + "?status=" + status).then(resp => {
            return resp.data
        }).then(data => {
            return data
        }).catch(err => {
            console.log("Error in calling order API")
            console.log(err)
            throw new Error("Error in calling order API");
        })
    }
    async updateOrderStatus(orderId: string, status: EOrderStatus, httpClient: IHttpClient) {
        return await httpClient.put(this.defaultPath + "/order" + "?id=orderId" + orderId + "&status=" + status).then(resp => {
            return resp.data
        }).then(data => {
            return data
        }).catch(err => {
            console.log("Error in calling order API")
            console.log(err)
            throw new Error("Error in calling order API");
        })
    }

}

export { OrderHttp };
