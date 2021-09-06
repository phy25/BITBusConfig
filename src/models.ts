import { BusesDestList, BusLine } from "./modelsBuses";
import { BusPatternCalendarYear } from "./modelsCalendar";
import { BusPatternSchedule, TimeAsInt } from "./modelsDataType"
import { BusSingleTimetable } from "./modelsSingleTimetable";

export interface DataJson {
    hl: string;
    version: number;
    lang: DataLang;
    dayRanges: string[];
    weekdays: DataBusPatternCalendarByYear;
    busTypes: DataBusTypes;
    stops: DataStops;
    buses: DataBuses;
    busesLXSubway: DataBusesLXSubway;
};

export type DataBusPatternCalendarByYear = Record<string, DataBusPatternCalendarByMonth | BusPatternCalendarYear>;

export type DataBusPatternCalendarByMonth = DataBusPatternCalendarByDay[];

export type DataBusPatternCalendarByDay = BusPatternSchedule[];

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

export interface DataLangDestListItem extends UnlocalizedDataLangDestListItem {
    name: string;
    subwayRoutes: string;
};

export type DataBusTypes = Record<string, DataBusTypesItem>;

export interface DataBusTypesItem {
    name: string;
    label?: string;
    fare: string;
    contactNumber: string;
    provider: string;
};

export type DataStops = Record<string, DataStopsItem>;

export interface DataStopsItem {
    name: string;
    desc: string;
    image: string | null;
    tencentLatlng: number[];
};

export type DataBusesLXSubway = Record<string, DataBusesLXSubwayItem>;

export interface DataBusesLXSubwayItem {
    departure: TimeAsInt[] | BusSingleTimetable;
};

export type DataBuses = Record<string, DataBusesDestList>;

export type DataBusesDestList = DataBusesListItem[] | BusesDestList;

export interface DataBusesListItem {
    id: string;
    stops: string[];
    time: number[];
    days?: number[];
    date?: number[];
    type: number;
    coaches: number;
    remark?: string | null;
    stopsFade?: number[];
    "label-sm"?: string;
};
