import { DataBuses } from "../src/models";

import * as busesZGC2LX from "./busesZGC2LX";
// import * as busesLX2ZGC from "./busesLX2ZGC";

export function getData(lang: string): DataBuses {
    return {
        ZGC2LX: busesZGC2LX.getData(lang),
        // LX2ZGC: busesLX2ZGC.getData(lang),
    };
}