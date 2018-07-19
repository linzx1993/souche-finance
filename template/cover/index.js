/* eslint-disable */
import instance from './instance';

<% _.forEach(data, function(o){ %> /** <%- o.summary %> */
function <%- $$.convertUrl(o.path) %> (opts) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts,
        res: <%- o.response %>
    });
}

<% }) %>
export {
    <% _.forEach(data, function(o, i){ %><%- $$.convertUrl(o.path) %><% if(data.length - 1 !== i) { %>,
    <% } %><% }) %>
};
