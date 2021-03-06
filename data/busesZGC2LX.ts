import { BusesDestList, BusLine, BusScheduleStop } from "../src/modelsBuses";
import { DataBusesDestList } from "../src/models";

import * as scheduleZGC2LX from "./scheduleZGC2LX";

export const data: DataBusesDestList = new BusesDestList();

export function getData(lang: string): DataBusesDestList {
    // nothing is locale-aware, yet
    return data;
}

data.push(new BusLine("Z0-1", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 5, 30, 0),
    new BusScheduleStop("LXS", 6, 20, 0),
    new BusScheduleStop("LXN", 6, 23, 1),
])); //days: 25

data.push(new BusLine("Z1", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 6, 40, 0),
    new BusScheduleStop("LXS", 7, 40, 0),
    new BusScheduleStop("LXN", 7, 43, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z2", 0, 2).addStopsSelf([
    new BusScheduleStop("ZGC", 8, 0, 0),
    new BusScheduleStop("LXS", 9, 0, 0),
    new BusScheduleStop("LXN", 9, 3, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z2E", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 8, 0, 0),
    new BusScheduleStop("LXS", 9, 0, 0),
    new BusScheduleStop("LXN", 9, 3, 1),
])); //days: [9,19,39]

data.push(new BusLine("Z3", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 10, 10, 0),
    new BusScheduleStop("LXS", 11, 0, 0),
    new BusScheduleStop("LXN", 11, 3, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z4", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 11, 40, 0),
    new BusScheduleStop("LXS", 12, 30, 0),
    new BusScheduleStop("LXN", 12, 33, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25]

data.push(new BusLine("Z5", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 12, 0, 0),
    new BusScheduleStop("LXS", 12, 50, 0),
    new BusScheduleStop("LXN", 12, 53, 1),
])); //days: [1,2,3,4,5,9,11,12,13,14,15,19,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("Z6", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 13, 50, 0),
    new BusScheduleStop("LXS", 14, 50, 0),
    new BusScheduleStop("LXN", 14, 53, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z7", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 16, 10, 0),
    new BusScheduleStop("LXS", 17, 0, 0),
    new BusScheduleStop("LXN", 17, 3, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z8", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 0, 0),
    new BusScheduleStop("LXS", 19, 0, 0),
    new BusScheduleStop("LXN", 19, 3, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z8E", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 0, 0),
    new BusScheduleStop("LXS", 19, 0, 0),
    new BusScheduleStop("LXN", 19, 3, 1),
])); //days: [9,19,39]

data.push(new BusLine("Z9", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 21, 10, 0),
    new BusScheduleStop("LXS", 22, 0, 0),
    new BusScheduleStop("LXN", 22, 3, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("Z10", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 17, 30, 0),
    new BusScheduleStop("LXS", 18, 20, 0),
    new BusScheduleStop("LXN", 18, 23, 1),
])); //days: [5,15]

data.push(new BusLine("Z11", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 7, 30, 0),
    new BusScheduleStop("LXS", 8, 20, 0),
])); //days: [6,36]

data.push(new BusLine("Z12", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 13, 30, 0),
    new BusScheduleStop("LXS", 14, 20, 0),
])); //days: [6,36]

data.push(new BusLine("Z13", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 20, 0, 0),
    new BusScheduleStop("LXS", 20, 50, 0),
])); //days: [6,36]

data.push(new BusLine("Z16", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 21, 0, 0),
    new BusScheduleStop("LXS", 21, 50, 0),
])); //days: [36]

data.push(new BusLine("Z17", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 30, 0),
    new BusScheduleStop("LXS", 19, 20, 0),
]));

data.push(new BusLine("Z14", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 8, 0, 0),
    new BusScheduleStop("LXS", 8, 50, 0),
])); //days: [0]

data.push(new BusLine("Z15", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 15, 0, 0),
    new BusScheduleStop("LXS", 15, 50, 0),
])); //days: [0]

data.push(new BusLine("Z18", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 10, 10, 0),
    new BusScheduleStop("LXS", 11, 0, 0),
]));

data.push(new BusLine("Z21", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 17, 0, 0),
    new BusScheduleStop("LXS", 18, 0, 0),
    new BusScheduleStop("LXN", 18, 3, 1),
])); //days: [31,32,33,34,35]

data.push(new BusLine("Z31", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 17, 20, 0),
    new BusScheduleStop("LXS", 18, 20, 0),
    new BusScheduleStop("LXN", 18, 23, 1),
])); //days: [41,42,43,44,45]

data.push(new BusLine("Z22", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 20, 0, 0),
    new BusScheduleStop("LXS", 21, 0, 0),
    new BusScheduleStop("LXN", 21, 3, 1),
])); //days: [31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("H2OZ1", 3, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 8, 30, 0),
    new BusScheduleStop("LXS", 9, 30, 0),
    new BusScheduleStop("LXL", 9, 33, 1),
])); //days: [10,11,12,13,14,15,19,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("H2OZ2", 3, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 30, 0),
    new BusScheduleStop("LXS", 19, 30, 0),
    new BusScheduleStop("LXL", 19, 33, 1),
])); //days: [10,11,12,13,14,15,19,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("H2OZ3", 3, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 12, 0, 0),
    new BusScheduleStop("LXS", 13, 0, 0),
    new BusScheduleStop("LXL", 13, 3, 1),
]));

data.push(new BusLine("H2OZ4", 3, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 17, 0, 0),
    new BusScheduleStop("LXS", 18, 0, 0),
    new BusScheduleStop("LXL", 18, 3, 1),
]));

data.push(new BusLine("H2OZ5", 3, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 11, 50, 0),
    new BusScheduleStop("LXS", 12, 50, 0),
    new BusScheduleStop("LXL", 12, 53, 1),
]));

data.push(new BusLine("H2OZ6", 3, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 0, 0),
    new BusScheduleStop("LXS", 19, 0, 0),
    new BusScheduleStop("LXL", 19, 3, 1),
]));

data.push(new BusLine("Z51", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 6, 40, 0),
    new BusScheduleStop("LXS", 7, 40, 0),
    new BusScheduleStop("LXN", 7, 43, 1),
    new BusScheduleStop("LXE", 7, 45, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z52", 0, 2).addStopsSelf([
    new BusScheduleStop("ZGC", 8, 0, 0),
    new BusScheduleStop("LXS", 9, 0, 0),
    new BusScheduleStop("LXN", 9, 3, 1),
    new BusScheduleStop("LXE", 9, 5, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z53", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 10, 10, 0),
    new BusScheduleStop("LXS", 11, 0, 0),
    new BusScheduleStop("LXN", 11, 3, 1),
    new BusScheduleStop("LXE", 11, 5, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z54", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 12, 0, 0),
    new BusScheduleStop("LXS", 12, 50, 0),
    new BusScheduleStop("LXN", 12, 53, 1),
    new BusScheduleStop("LXE", 12, 55, 1),
])); //days: [1,2,3,4,5,9,11,12,13,14,15,19,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("Z55", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 13, 50, 0),
    new BusScheduleStop("LXS", 14, 50, 0),
    new BusScheduleStop("LXN", 14, 53, 1),
    new BusScheduleStop("LXE", 14, 55, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z56", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 16, 10, 0),
    new BusScheduleStop("LXS", 17, 0, 0),
    new BusScheduleStop("LXN", 17, 3, 1),
    new BusScheduleStop("LXE", 17, 5, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z57", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 0, 0),
    new BusScheduleStop("LXS", 19, 0, 0),
    new BusScheduleStop("LXN", 19, 3, 1),
    new BusScheduleStop("LXE", 19, 5, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("Z58", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 21, 10, 0),
    new BusScheduleStop("LXS", 22, 0, 0),
    new BusScheduleStop("LXN", 22, 3, 1),
    new BusScheduleStop("LXE", 22, 5, 1),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("Z59", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 17, 20, 0),
    new BusScheduleStop("LXS", 18, 20, 0),
    new BusScheduleStop("LXN", 18, 23, 1),
    new BusScheduleStop("LXE", 18, 25, 1),
])); //days: [41,42,43,44,45]

data.push(new BusLine("Z60", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 20, 0, 0),
    new BusScheduleStop("LXS", 21, 0, 0),
    new BusScheduleStop("LXN", 21, 3, 1),
    new BusScheduleStop("LXE", 21, 5, 1),
])); //days: [31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("Z61", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 12, 30, 0),
    new BusScheduleStop("LXS", 13, 30, 0),
    new BusScheduleStop("LXN", 13, 33, 1),
    new BusScheduleStop("LXE", 13, 35, 1),
]));

data.push(new BusLine("Z62", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 15, 0, 0),
    new BusScheduleStop("LXS", 16, 0, 0),
    new BusScheduleStop("LXN", 16, 3, 1),
    new BusScheduleStop("LXE", 16, 5, 1),
]));

data.push(new BusLine("Z63", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 19, 30, 0),
    new BusScheduleStop("LXS", 20, 30, 0),
    new BusScheduleStop("LXN", 20, 33, 1),
    new BusScheduleStop("LXE", 20, 35, 1),
]));

data.push(new BusLine("Z64", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 7, 50, 0),
    new BusScheduleStop("LXS", 8, 50, 0),
    new BusScheduleStop("LXN", 8, 53, 1),
    new BusScheduleStop("LXE", 8, 55, 1),
]));

data.push(new BusLine("Z65", 0, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 18, 30, 0),
    new BusScheduleStop("LXS", 19, 30, 0),
    new BusScheduleStop("LXN", 19, 33, 1),
    new BusScheduleStop("LXE", 19, 35, 1),
]));

// should always be the last line
data.applySchedule(scheduleZGC2LX.data);