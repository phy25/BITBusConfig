import { DataLangDestList, DataLangDestListItem } from '../../src/models';

import * as destListUnlocalized from '../destListUnlocalized';

const ZGC2LX: DataLangDestListItem = {
    "name": "ZGC › LX",
    "subwayRoutes": "Subway Hours to LX 5:57 - 22:20* (RMB 7)\n\nLine 4: Weigongcun > National Library\n　Interchange to Line 9 on the same platform\nLine 9: National Library > Guogongzhuang\n　Interchange to Fangshan Line on the same platform\nFangshan Line: Guogongzhuang > Liangxiang University Town North\n　Exit A, walk to the campus or wait for the shuttle bus\n* The last train time is estimated, and because several interchanges are required, the actual deadline may be later",
    ...destListUnlocalized.ZGC2LX
};

const LX2ZGC: DataLangDestListItem = {
    "name": "LX › ZGC",
    "subwayRoutes": "Subway Hours to ZGC 5:24 - 22:09 (RMB 7)\n\nWalk to the station or wait for the shuttle bus\nFangshan Line: Liangxiang University Town North > Guogongzhuang\n　Interchange to Line 9 on the same platform\nLine 9: Guogongzhuang > National Library\n　Interchange to Line 4 on the same platform (To Anheqiao North)\nLine 4: National Library > Weigongcun\nExit A, and go upstairs and straight ahead to the campus east gate",
    ...destListUnlocalized.LX2ZGC
};

export const data: DataLangDestList = {
    ZGC2LX,
    LX2ZGC,
};