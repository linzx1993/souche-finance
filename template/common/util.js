/**
 * @file 封装请求
 */
import Http from '@souche-f2e/http-request';

const ajax = (url, params = {}) => {
    params.url = url;
    params.method = params.method || 'get';
    return Http(params);
};

export default {
    ajax(baseURL) {
        return function(params) {
            let host = typeof baseURL === 'function' ? baseURL() : baseURL;
            params.opts = params.opts || {};
            return ajax(host + params.url, {
                data: params.opts || {},
                ...params
            });
        };
    }
};
