/* eslint-disable */
import instance from './instance';

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %> (opts) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts,
        res: <%- o.responseMessages[0].responseModel %>
    });
}

<% }) %>
