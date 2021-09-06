import { DataBuses, DataBusesDestList } from "../src/models";

const ZGC2LX: DataBusesDestList = [];
const LX2ZGC: DataBusesDestList = [];

export function getData(lang: string): DataBuses {
    return {
        ZGC2LX: ZGC2LX,
        LX2ZGC: LX2ZGC,
    };
}