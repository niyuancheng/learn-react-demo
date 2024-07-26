import axios, { Axios } from "axios";
import { Genshion_Base_URL, Genshion_Http_Header } from "../../utils/constants";

export abstract class BaseService {
    axiosInstance: Axios;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: Genshion_Base_URL,
            timeout: 1000,
            headers: Genshion_Http_Header
        })
    }

    abstract getData(...params: any[]): any;
}