/**
 * @file util.js
 * @desc react-native接口请求工具类封装
 * @author leng_bw@163.com
 * @version 1.0.0
 * @date 2019-03-02
 */

import { SRNStore } from '@souche-f2e/srn-framework';

const instance = new SRNStore().__fetch;

function createAPI(baseURL) {
    let host = typeof baseURL === 'function' ? baseURL() : baseURL;
    return function (conf) {
        conf = conf || {};
        return instance({
            url: `${host}/${conf.url}`,
            method: conf.method,
            data: conf.opts
        });
    };
}

export default {
    createAPI
};
