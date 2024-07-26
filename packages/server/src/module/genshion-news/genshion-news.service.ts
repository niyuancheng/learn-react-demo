import { Injectable } from "@nestjs/common";
import { BaseService } from "../base/base.service";

@Injectable()
export class GenshionNewsService extends BaseService{
    async getData(id: number) {
        const res = await this.axiosInstance.get('content_v2_user/app/16471662a82d418a/getContent', {
            params: {
                iAppId: 43,
                iInfoId: id,
                sLangKey: 'zh-cn',
                iAround: 0,
            }
        });
        return res.data.data;
    }
}