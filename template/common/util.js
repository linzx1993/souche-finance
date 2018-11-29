import axios from 'axios';

const instance = axios.create();

function finance(baseURL) {
    return function (conf) {
        conf = conf || {};
        return instance(Object.assign({}, {
            url: conf.url,
            baseURL: baseURL,
            method: conf.method
        }, conf.opts));
    };
}

export {
    finance
};
