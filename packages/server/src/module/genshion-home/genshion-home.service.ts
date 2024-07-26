import { Injectable } from "@nestjs/common";
import axios, { Axios } from "axios";
import { Genshion_Base_URL, Genshion_Http_Header } from "../../utils/constants";
import { BaseService } from "../base/base.service";
/**
 * @interface 在nestjs中，service专门用于处理各种业务逻辑
 */
@Injectable()
export class GenshionHomeService extends BaseService {

    async getData(page: number, pageSize: number) {
        const res = await this.axiosInstance.get('/content_v2_user/app/16471662a82d418a/getContentList', {
            params: {
                iAppId: 43,
                iChanId: 719,
                iPageSize: pageSize,
                iPage: page,
                sLangKey: 'zh-cn'
            }
        })
        return res.data.data.list;
    }
}