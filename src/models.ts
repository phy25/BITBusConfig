import { TimeAsInt } from "./modelsDataType"

export interface DataJson {
    hl: string;
    version: number;
    lang: DataLang;
};

export interface DataLang {
    changelog: string;
    notice: string;
    fare: string;
    types: string[];
    contactNumber: string;
    contactNumberRainbow: string[];
    contactNumberRainbowNote: string;
    destList: DataLangDestList;
};

export type DataLangDestList = Record<string, DataLangDestListItem>;

export enum DataLangDestListItemStartEnd {'start' = 'start', 'end' = 'end'};

export interface UnlocalizedDataLangDestListItem {
    start: string;
    end: string;
    latLng: number[];
    busTowardsAzimuth: number;
    busAzimuth: number;
    subwayEarlyStart: TimeAsInt;
    subwayActualStart: TimeAsInt;
    subwayLateStart: TimeAsInt;
    subwayActualEnd: TimeAsInt;
    enableLXSubway: DataLangDestListItemStartEnd;
};

export interface DataLangDestListItem extends UnlocalizedDataLangDestListItem{
    name: string;
    subwayRoutes: string;
};