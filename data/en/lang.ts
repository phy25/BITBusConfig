import { DataLang } from '../../src/models';
import * as destList from './destList';

export const data: DataLang = {
    "destList": destList.data,
    "changelog": "Latest update of the bus service.",
    "notice": "I don't know the current schedule in use. Let me know through feedback below if you know!",
    "fare": "Campus bus between Zhongguancun and Liangxiang: Single ticket, Student RMB 6, Faculty and others RMB 10. Only accepts campus card, fare deducted according to card type.\nRainbow Bus: Fare RMB 9. Only accept payment from WeChat official account 彩虹巴士H2O or respective mobile app.",
    "types": [
        "Faculty Bus",
        "Bus",
        "Exam Bus",
        "Rainbow Bus",
        ""
    ],
    "contactNumber": "01068912868",
    "contactNumberRainbow": [
        "4000780080"
    ],
    "contactNumberRainbowNote": "Mon-Fri 6:30-20:30 (Chinese Only)",
};