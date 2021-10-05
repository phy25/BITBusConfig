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
data.add(ScheduleDays.V4_WORKDAY,           ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31"]);

data.add(ScheduleDays.V4_REDUCED_WORKDAY,   ["L2", "L4", "L31"]);
data.add(ScheduleDays.V4_ORIENTATION_DAY,   ["L1", "L2", "L4", "L31", "L9"]);

// with LXE
data.add(ScheduleDays.V5_H2O_MONDAY,        ["L51", "L52", "L53", "L54", "L55", "L56", "L57", "L58", "L59", "L60", "L61", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V5_H2O_TUESDAY,       ["L51", "L52", "L53", "L54", "L55", "L56", "L57", "L58", "L59", "L60", "L61", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V5_H2O_WEDNESDAY,     ["L51", "L52", "L53", "L54", "L55", "L56", "L57", "L58", "L59", "L60", "L61", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V5_H2O_THURSDAY,      ["L51", "L52", "L53", "L54", "L55", "L56", "L57", "L58", "L59", "L60", "L61", "H2OL1", "H2OL3"]);
data.add(ScheduleDays.V5_H2O_FRIDAY,        ["L51", "L52", "L53", "L54", "L55", "L56", "L57", "L58", "L59", "L60", "L61", "H2OL1", "H2OL3"]);

data.add(ScheduleDays.V5_WEEKEND,           ["L11", "L12", "L13", "L16", "L17"]);

data.add(ScheduleDays.V6_H2O_MONDAY,        ["L51", "L52", "L53", "L54", "L56", "L57", "L58", "L59", "L61", "L62", "L63", "H2OL1", "H2OL3", "H2OL4", "H2OL5"]);
data.add(ScheduleDays.V6_H2O_TUESDAY,       ["L51", "L52", "L53", "L54", "L56", "L57", "L58", "L59", "L61", "L62", "L63", "H2OL1", "H2OL3", "H2OL4", "H2OL5"]);
data.add(ScheduleDays.V6_H2O_WEDNESDAY,     ["L51", "L52", "L53", "L54", "L56", "L57", "L58", "L59", "L61", "L62", "L63", "H2OL1", "H2OL3", "H2OL4", "H2OL5"]);
data.add(ScheduleDays.V6_H2O_THURSDAY,      ["L51", "L52", "L53", "L54", "L56", "L57", "L58", "L59", "L61", "L62", "L63", "H2OL1", "H2OL3", "H2OL4", "H2OL5"]);
data.add(ScheduleDays.V6_H2O_FRIDAY,        ["L51", "L52", "L53", "L54", "L56", "L57", "L58", "L59", "L61", "L62", "L63", "H2OL1", "H2OL3", "H2OL4", "H2OL5"]);

data.add(ScheduleDays.V6_H2O_SUMMERDAY,     ["H2OL1", "H2OL4", "L64", "H2OL5", "H2OL3", "L65", "L66"]);

data.add(ScheduleDays.V7_H2O_MONDAY,        ["L51", "L52", "L53", "L54", "L62", "L56", "L57", "L61", "L58", "L67", "L63", "L59", "H2OL1", "H2OL4", "H2OL5", "H2OL3"]);
data.add(ScheduleDays.V7_H2O_TUESDAY,       ["L51", "L52", "L53", "L54", "L62", "L56", "L57", "L61", "L58", "L67", "L63", "L59", "H2OL1", "H2OL4", "H2OL5", "H2OL3"]);
data.add(ScheduleDays.V7_H2O_WEDNESDAY,     ["L51", "L52", "L53", "L54", "L62", "L56", "L57", "L61", "L58", "L67", "L63", "L59", "H2OL1", "H2OL4", "H2OL5", "H2OL3"]);
data.add(ScheduleDays.V7_H2O_THURSDAY,      ["L51", "L52", "L53", "L54", "L62", "L56", "L57", "L61", "L58", "L67", "L63", "L59", "H2OL1", "H2OL4", "H2OL5", "H2OL3"]);
data.add(ScheduleDays.V7_H2O_FRIDAY,        ["L51", "L52", "L53", "L54", "L62", "L56", "L57", "L61", "L58", "L67", "L63", "L59", "H2OL1", "H2OL4", "H2OL5", "H2OL3"]);

data.add(ScheduleDays.V7_WEEKEND,           ["L17", "L16", "L11", "L12", "L18", "L13"]);
