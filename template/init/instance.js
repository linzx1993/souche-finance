/**
 * @file instance.js
 * @desc react-native接口host配置
 * @author leng_bw@163.com
 * @version 1.0.0
 * @date 2019-03-02
 */

import { SRNConfig } from '@souche-f2e/srn-framework';
import Util from '../util.js';

const baseUrl = function() {
    return SRNConfig.baseUrl;
};

export default Util.createAPI(baseUrl);
