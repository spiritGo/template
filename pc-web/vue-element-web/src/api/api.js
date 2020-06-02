import request from './request';


/* WebApi/GetNationality @ 获取相关国家 */
export const GetNationality = function (params) {
    return request({
        url: 'WebApi/GetNationality',
        method: 'get',
        params: params
    })
}