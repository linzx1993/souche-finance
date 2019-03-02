import { SRNConfig } from '@souche-f2e/srn-framework';
import Util from '../util.js';

const baseUrl = function() {
    return SRNConfig.baseUrl;
};

export default Util.createAPI(baseUrl);
