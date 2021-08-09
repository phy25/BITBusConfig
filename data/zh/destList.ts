import { DataLangDestList, DataLangDestListItem } from '../../src/models';

import * as destListUnlocalized from '../destListUnlocalized';

const ZGC2LX: DataLangDestListItem = {
    "name": "中关村 › 良乡",
    "subwayRoutes": "往良乡地铁首末班 5:57 - 22:20*（7 元）\n\n4 号线 魏公村 > 国家图书馆\n　同台换乘 9 号线\n9 号线 国家图书馆 > 郭公庄\n　同台换乘房山线\n房山线 郭公庄 > 良乡大学城北\nA 出口步行到校，或在门口的站台等候摆渡车\n* 末班车时间为保守推测值，因为多条线路衔接，实际可能比此时间晚几分钟",
    ...destListUnlocalized.ZGC2LX
};

const LX2ZGC: DataLangDestListItem = {
    "name": "良乡 › 中关村",
    "subwayRoutes": "往中关村地铁首末班 5:24 - 22:09 （7 元）\n\n步行或等候摆渡车\n房山线 良乡大学城北 > 郭公庄\n　同台换乘 9 号线\n9 号线 郭公庄 > 国家图书馆\n　同台换乘 4 号线（安河桥北方向）\n4 号线 国家图书馆 > 魏公村\n　A 出口从楼梯直行即到东门",
    ...destListUnlocalized.LX2ZGC
};

export const data: DataLangDestList = {
    ZGC2LX,
    LX2ZGC,
};