import { createAPI } from '<%- $$.relative("util") %>';
import config from '<%- $$.relative("config") %>';

const baseUrl = {
	development: '',
	prepub: '',
	production: ''
}[config.env];

export default createAPI(baseUrl);
