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

export {
    createAPI
};
