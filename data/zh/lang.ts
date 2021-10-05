import { DataLang } from '../../src/models';
import * as destList from './destList';

export const data: DataLang = {
    "destList": destList.data,
    "changelog": "2021 年班车数据更新啦（真的很长的一年呢）！如果你对具体数据感兴趣，可以去 https://github.com/phy25/BITBusConfig",
    "notice": "2021 年班车数据如有问题，请通过下方反馈按钮告诉我 :>",
    "fare": "中关村与良乡间往返校营班车票价：学生 6 元/次，教职工和其他卡 10 元/次。只可凭校园卡支付车费，按卡类型自动收费。\n彩虹巴士试运行票价：9 元/次，只可通过微信公众号“彩虹巴士H2O”或其手机应用支付、验票。",
    "types": [
        "教师班车",
        "师生班车",
        "考试专用班车",
        "彩虹巴士"
    ],
    "contactNumber": "01068912868",
    "contactNumberRainbow": [
        "4000780080"
    ],
    "contactNumberRainbowNote": "周一到周五 6:30-20:30",
};