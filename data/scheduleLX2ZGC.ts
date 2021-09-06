import { BusScheduleDayLineMap } from "../src/modelsBuses";
import { ScheduleDays } from "./scheduleDays";

export const data: BusScheduleDayLineMap = new BusScheduleDayLineMap();

data.add(ScheduleDays.V1_MONDAY,            ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"]);
data.add(ScheduleDays.V1_TUESDAY,           ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"]);
data.add(ScheduleDays.V1_WEDNESDAY,         ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"]);
data.add(ScheduleDays.V1_THURSDAY,          ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"]);
data.add(ScheduleDays.V1_FRIDAY,            ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10"]);
data.add(ScheduleDays.V1_FRIDAY_AS_REGULAR, ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"]);
data.add(ScheduleDays.V1_EXAMDAY,           ["L1", "L4", "L7E"]);
data.add(ScheduleDays.V1_WEEKEND,           ["L11", "L12", "L13"]);
data.add(ScheduleDays.V1_HOLIDAY,           ["L14", "L15"]);

data.add(ScheduleDays.V1_H2O_MONDAY,        ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"]);
data.add(ScheduleDays.V1_H2O_TUESDAY,       ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"]);
data.add(ScheduleDays.V1_H2O_WEDNESDAY,     ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"]);
data.add(ScheduleDays.V1_H2O_THURSDAY,      ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"]);
data.add(ScheduleDays.V1_H2O_FRIDAY,        ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "H2OL1", "H2OL2"]);
data.add(ScheduleDays.V1_H2O_EXAMDAY,       ["L1", "L4", "L7E", "H2OL1", "H2OL2"]);
data.add(ScheduleDays.V1_H2O_ONLY,          ["H2OL1", "H2OL2"]);

data.add(ScheduleDays.V3_H2O_MONDAY,        ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V3_H2O_TUESDAY,       ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V3_H2O_WEDNESDAY,     ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V3_H2O_THURSDAY,      ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V3_H2O_FRIDAY,        ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V3_WEEKEND,           ["L11", "L12", "L13", "L16"]);
data.add(ScheduleDays.V3_H2O_EXAMDAY,       ["L1", "L4", "L7E", "L9", "L21", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V3_H2O_ONLY,          ["H2OL3"]); // not sure if this is used at all and it's weird

data.add(ScheduleDays.V4_H2O_MONDAY,        ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V4_H2O_TUESDAY,       ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V4_H2O_WEDNESDAY,     ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V4_H2O_THURSDAY,      ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V4_H2O_FRIDAY,        ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"]);
