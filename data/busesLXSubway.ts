import { DataBusesLXSubway, DataBusesLXSubwayItem } from "../src/models";
import { TimeAsInt } from "../src/modelsDataType";
import { BusSingleTimetable } from "../src/modelsSingleTimetable";

const LX2ZGCDeparture = new BusSingleTimetable();
LX2ZGCDeparture.addStepTimetable(new TimeAsInt(6, 30), new TimeAsInt(10, 50), 20);
LX2ZGCDeparture.addStepTimetable(new TimeAsInt(11, 30), new TimeAsInt(17, 30), 20);
LX2ZGCDeparture.addStepTimetable(new TimeAsInt(18, 10), new TimeAsInt(22, 30), 20);

const ZGC2LXDeparture = new BusSingleTimetable();
ZGC2LXDeparture.addStepTimetable(new TimeAsInt(6, 40), new TimeAsInt(11, 0), 20);
ZGC2LXDeparture.addStepTimetable(new TimeAsInt(11, 40), new TimeAsInt(17, 40), 20);
ZGC2LXDeparture.addStepTimetable(new TimeAsInt(18, 20), new TimeAsInt(22, 40), 20);

const LX2ZGC: DataBusesLXSubwayItem = {
    departure: LX2ZGCDeparture,
};

const ZGC2LX: DataBusesLXSubwayItem = {
    departure: ZGC2LXDeparture,
};

export const data: DataBusesLXSubway = {
    LX2ZGC, ZGC2LX,
};