import { createAPI } from '<%- $$.relative("util") %>';

const baseUrl = {
	development: '',
	prepub: '',
	production: ''
}[process.env.NODE_ENV];

export default createAPI(baseUrl);
