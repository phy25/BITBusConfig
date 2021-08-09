import { UnlocalizedDataLangDestListItem, DataLangDestListItemStartEnd } from "../src/models";
import { TimeAsInt } from "../src/modelsDataType";

export const ZGC2LX: UnlocalizedDataLangDestListItem = {
    "start": "ZGC",
    "end": "LX",
    "latLng": [
        39.958775,
        116.311451
    ],
    "busTowardsAzimuth": 0,
    "busAzimuth": 1,
    "subwayEarlyStart": new TimeAsInt(5, 0),
    "subwayActualStart": new TimeAsInt(5, 57),
    "subwayLateStart": new TimeAsInt(22, 30),
    "subwayActualEnd": new TimeAsInt(22, 20),
    "enableLXSubway": DataLangDestListItemStartEnd.end,
};

export const LX2ZGC: UnlocalizedDataLangDestListItem = {
    "start": "LX",
    "end": "ZGC",
    "latLng": [
        39.731045,
        116.170060
    ],
    "busTowardsAzimuth": 0.5,
    "busAzimuth": 3,
    "subwayEarlyStart": new TimeAsInt(5, 0),
    "subwayActualStart": new TimeAsInt(5, 24),
    "subwayLateStart": new TimeAsInt(22, 9),
    "subwayActualEnd": new TimeAsInt(22, 9),
    "enableLXSubway": DataLangDestListItemStartEnd.start,
};

/*
let ZGC2XS;
let XS2ZGC;
let ZGC2HLG;
let ZGC2XSQ;
let HLG2ZGC;
let XSQ2ZGC;
let XSQ2LX;
let LX2XSQ;
*/