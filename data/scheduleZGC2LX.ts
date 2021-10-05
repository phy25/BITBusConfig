import { BusScheduleDayLineMap } from "../src/modelsBuses";
import { ScheduleDays } from "./scheduleDays";

export const data: BusScheduleDayLineMap = new BusScheduleDayLineMap();

data.add(ScheduleDays.V1_MONDAY,            ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"]);
data.add(ScheduleDays.V1_TUESDAY,           ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"]);
data.add(ScheduleDays.V1_WEDNESDAY,         ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"]);
data.add(ScheduleDays.V1_THURSDAY,          ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"]);
data.add(ScheduleDays.V1_FRIDAY,            ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "Z10"]);
data.add(ScheduleDays.V1_FRIDAY_AS_REGULAR, ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "Z0-1"]);
data.add(ScheduleDays.V1_EXAMDAY,           ["Z2E", "Z5", "Z8E"]);
data.add(ScheduleDays.V1_WEEKEND,           ["Z11", "Z12", "Z13"]);
data.add(ScheduleDays.V1_HOLIDAY,           ["Z14", "Z15"]);

data.add(ScheduleDays.V1_H2O_MONDAY,        ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V1_H2O_TUESDAY,       ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V1_H2O_WEDNESDAY,     ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V1_H2O_THURSDAY,      ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V1_H2O_FRIDAY,        ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "Z10", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V1_H2O_EXAMDAY,       ["Z2E", "Z5", "Z8E", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V1_H2O_ONLY,          ["H2OZ1", "H2OZ2"]);

data.add(ScheduleDays.V3_H2O_MONDAY,        ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V3_H2O_TUESDAY,       ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V3_H2O_WEDNESDAY,     ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V3_H2O_THURSDAY,      ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V3_H2O_FRIDAY,        ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V3_WEEKEND,           ["Z11", "Z12", "Z13", "Z16"]);
data.add(ScheduleDays.V3_H2O_EXAMDAY,       ["Z2E", "Z5", "Z8E", "Z9", "Z22", "H2OZ1", "H2OZ2"]);

data.add(ScheduleDays.V4_H2O_MONDAY,        ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V4_H2O_TUESDAY,       ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V4_H2O_WEDNESDAY,     ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V4_H2O_THURSDAY,      ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V4_H2O_FRIDAY,        ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V4_WORKDAY,           ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31"]);

data.add(ScheduleDays.V4_REDUCED_WORKDAY,   ["Z2", "Z5", "Z31"]);
data.add(ScheduleDays.V4_ORIENTATION_DAY,   ["Z1", "Z2", "Z5", "Z31", "Z9"]);

data.add(ScheduleDays.V5_H2O_MONDAY,        ["Z51", "Z52", "Z53", "Z54", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V5_H2O_TUESDAY,       ["Z51", "Z52", "Z53", "Z54", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V5_H2O_WEDNESDAY,     ["Z51", "Z52", "Z53", "Z54", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V5_H2O_THURSDAY,      ["Z51", "Z52", "Z53", "Z54", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "H2OZ1", "H2OZ2"]);
data.add(ScheduleDays.V5_H2O_FRIDAY,        ["Z51", "Z52", "Z53", "Z54", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "H2OZ1", "H2OZ2"]);

data.add(ScheduleDays.V5_WEEKEND,           ["Z11", "Z12", "Z13", "Z16", "Z17"]);

data.add(ScheduleDays.V6_H2O_MONDAY,        ["Z51", "Z52", "Z53", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "Z61", "H2OZ1", "H2OZ2", "H2OZ3", "H2OZ4"]);
data.add(ScheduleDays.V6_H2O_TUESDAY,       ["Z51", "Z52", "Z53", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "Z61", "H2OZ1", "H2OZ2", "H2OZ3", "H2OZ4"]);
data.add(ScheduleDays.V6_H2O_WEDNESDAY,     ["Z51", "Z52", "Z53", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "Z61", "H2OZ1", "H2OZ2", "H2OZ3", "H2OZ4"]);
data.add(ScheduleDays.V6_H2O_THURSDAY,      ["Z51", "Z52", "Z53", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "Z61", "H2OZ1", "H2OZ2", "H2OZ3", "H2OZ4"]);
data.add(ScheduleDays.V6_H2O_FRIDAY,        ["Z51", "Z52", "Z53", "Z55", "Z56", "Z57", "Z58", "Z59", "Z60", "Z61", "H2OZ1", "H2OZ2", "H2OZ3", "H2OZ4"]);

data.add(ScheduleDays.V6_H2O_SUMMERDAY,     ["Z52", "H2OZ1", "H2OZ3", "Z62", "H2OZ4", "H2OZ2", "Z63"]);

data.add(ScheduleDays.V7_H2O_MONDAY,        ["Z51", "Z64", "Z52", "Z53", "Z54", "Z61", "Z55", "Z56", "Z59", "Z65", "Z60", "Z58", "H2OZ1", "H2OZ5", "H2OZ4", "H2OZ6"]);
data.add(ScheduleDays.V7_H2O_TUESDAY,       ["Z51", "Z64", "Z52", "Z53", "Z54", "Z61", "Z55", "Z56", "Z59", "Z65", "Z60", "Z58", "H2OZ1", "H2OZ5", "H2OZ4", "H2OZ6"]);
data.add(ScheduleDays.V7_H2O_WEDNESDAY,     ["Z51", "Z64", "Z52", "Z53", "Z54", "Z61", "Z55", "Z56", "Z59", "Z65", "Z60", "Z58", "H2OZ1", "H2OZ5", "H2OZ4", "H2OZ6"]);
data.add(ScheduleDays.V7_H2O_THURSDAY,      ["Z51", "Z64", "Z52", "Z53", "Z54", "Z61", "Z55", "Z56", "Z59", "Z65", "Z60", "Z58", "H2OZ1", "H2OZ5", "H2OZ4", "H2OZ6"]);
data.add(ScheduleDays.V7_H2O_FRIDAY,        ["Z51", "Z64", "Z52", "Z53", "Z54", "Z61", "Z55", "Z56", "Z59", "Z65", "Z60", "Z58", "H2OZ1", "H2OZ5", "H2OZ4", "H2OZ6"]);

data.add(ScheduleDays.V7_WEEKEND,           ["Z11", "Z18", "Z12", "Z17", "Z13", "Z16"]);
