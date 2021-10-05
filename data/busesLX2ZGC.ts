import { BusesDestList, BusLine, BusScheduleStop } from "../src/modelsBuses";
import { DataBusesDestList } from "../src/models";

import * as scheduleLX2ZGC from "./scheduleLX2ZGC";

export const data: DataBusesDestList = new BusesDestList();

export function getData(lang: string): DataBusesDestList {
    // nothing is locale-aware, yet
    return data;
}

data.push(new BusLine("L1", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 6, 15, 1),
    new BusScheduleStop("LXS", 6, 20, 0),
    new BusScheduleStop("ZGC", 7, 40, 0),
])); //days: [1,2,3,4,5,9,11,12,13,14,15,19,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L2", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 7, 55, 1),
    new BusScheduleStop("LXS", 8, 0, 0),
    new BusScheduleStop("ZGC", 9, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L3", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 10, 5, 1),
    new BusScheduleStop("LXS", 10, 10, 0),
    new BusScheduleStop("ZGC", 11, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L4", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 11, 55, 1),
    new BusScheduleStop("LXS", 12, 0, 0),
    new BusScheduleStop("ZGC", 12, 50, 0),
])); //days: [1,2,3,4,5,9,11,12,13,14,15,19,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L5", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 12, 55, 1),
    new BusScheduleStop("LXS", 13, 0, 0),
    new BusScheduleStop("ZGC", 14, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L6", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 13, 45, 1),
    new BusScheduleStop("LXS", 13, 50, 0),
    new BusScheduleStop("ZGC", 14, 50, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L7", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 16, 5, 1),
    new BusScheduleStop("LXS", 16, 10, 0),
    new BusScheduleStop("ZGC", 17, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L7E", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 16, 25, 1),
    new BusScheduleStop("LXS", 16, 30, 0),
    new BusScheduleStop("ZGC", 17, 30, 0),
])); //days: [9,19,39]

data.push(new BusLine("L8", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 17, 55, 1),
    new BusScheduleStop("LXS", 18, 0, 0),
    new BusScheduleStop("ZGC", 19, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L9", 0, 1).addStopsSelf([
    new BusScheduleStop("LXN", 21, 5, 1),
    new BusScheduleStop("LXS", 21, 10, 0),
    new BusScheduleStop("ZGC", 22, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L10", 1, 1).addStopsSelf([
    new BusScheduleStop("LXN", 18, 25, 1),
    new BusScheduleStop("LXS", 18, 30, 0),
    new BusScheduleStop("ZGC", 19, 20, 0),
])); //days: [5,15,31,32,33,34,35]

data.push(new BusLine("L31", 1, 1).addStopsSelf([
    new BusScheduleStop("LXN", 17, 15, 1),
    new BusScheduleStop("LXS", 17, 20, 0),
    new BusScheduleStop("ZGC", 18, 20, 0),
])); //days: [41,42,43,44,45]

data.push(new BusLine("L16", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 7, 30, 0),
    new BusScheduleStop("ZGC", 8, 20, 0),
])); //days: [36]

data.push(new BusLine("L17", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 6, 30, 0),
    new BusScheduleStop("ZGC", 7, 20, 0),
]));

data.push(new BusLine("L18", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 18, 30, 0),
    new BusScheduleStop("ZGC", 19, 20, 0),
]));

data.push(new BusLine("L11", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 8, 30, 0),
    new BusScheduleStop("ZGC", 9, 20, 0),
])); //days: [6,36]

data.push(new BusLine("L12", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 14, 30, 0),
    new BusScheduleStop("ZGC", 15, 20, 0),
])); //days: [6,36]

data.push(new BusLine("L13", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 21, 0, 0),
    new BusScheduleStop("ZGC", 21, 50, 0),
])); //days: [6,36]

data.push(new BusLine("L14", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 9, 0, 0),
    new BusScheduleStop("ZGC", 9, 50, 0),
])); //days: [0]

data.push(new BusLine("L15", 1, 1).addStopsSelf([
    new BusScheduleStop("LXS", 16, 0, 0),
    new BusScheduleStop("ZGC", 16, 50, 0),
])); //days: [0]

data.push(new BusLine("L21", 1, 1).addStopsSelf([
    new BusScheduleStop("LXN", 7, 25, 1),
    new BusScheduleStop("LXS", 7, 30, 0),
    new BusScheduleStop("ZGC", 8, 50, 0),
])); //days: [31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("H2OL1", 3, 1).addStopsSelf([
    new BusScheduleStop("LXL", 6, 48, 1),
    new BusScheduleStop("LXS", 6, 50, 0),
    new BusScheduleStop("ZGC", 7, 50, 0),
])); //days: [10,11,12,13,14,15,19,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("H2OL2", 3, 1).addStopsSelf([
    new BusScheduleStop("LXL", 17, 18, 1),
    new BusScheduleStop("LXS", 17, 20, 0),
    new BusScheduleStop("ZGC", 18, 20, 0),
])); //days: [10,11,12,13,14,15,19]

data.push(new BusLine("H2OL3", 3, 1).addStopsSelf([
    new BusScheduleStop("LXL", 15, 18, 1),
    new BusScheduleStop("LXS", 15, 20, 0),
    new BusScheduleStop("ZGC", 16, 20, 0),
])); //days: [30,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("H2OL4", 3, 1).addStopsSelf([
    new BusScheduleStop("LXL", 7, 28, 1),
    new BusScheduleStop("LXS", 7, 30, 0),
    new BusScheduleStop("ZGC", 8, 30, 0),
]));

data.push(new BusLine("H2OL5", 3, 1).addStopsSelf([
    new BusScheduleStop("LXL", 12, 58, 1),
    new BusScheduleStop("LXS", 13, 0, 0),
    new BusScheduleStop("ZGC", 14, 0, 0),
]));

data.push(new BusLine("L51", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 6, 12, 1),
    new BusScheduleStop("LXN", 6, 15, 1),
    new BusScheduleStop("LXS", 6, 20, 0),
    new BusScheduleStop("ZGC", 7, 40, 0),
])); //days: [1,2,3,4,5,9,11,12,13,14,15,19,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L52", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 7, 52, 1),
    new BusScheduleStop("LXN", 7, 55, 1),
    new BusScheduleStop("LXS", 8, 0, 0),
    new BusScheduleStop("ZGC", 9, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L53", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 10, 2, 1),
    new BusScheduleStop("LXN", 10, 5, 1),
    new BusScheduleStop("LXS", 10, 10, 0),
    new BusScheduleStop("ZGC", 11, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L54", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 11, 52, 1),
    new BusScheduleStop("LXN", 11, 55, 1),
    new BusScheduleStop("LXS", 12, 0, 0),
    new BusScheduleStop("ZGC", 12, 50, 0),
])); //days: [1,2,3,4,5,9,11,12,13,14,15,19,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L55", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 12, 52, 1),
    new BusScheduleStop("LXN", 12, 55, 1),
    new BusScheduleStop("LXS", 13, 0, 0),
    new BusScheduleStop("ZGC", 14, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L56", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 13, 42, 1),
    new BusScheduleStop("LXN", 13, 45, 1),
    new BusScheduleStop("LXS", 13, 50, 0),
    new BusScheduleStop("ZGC", 14, 50, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L57", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 16, 2, 1),
    new BusScheduleStop("LXN", 16, 5, 1),
    new BusScheduleStop("LXS", 16, 10, 0),
    new BusScheduleStop("ZGC", 17, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L58", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 17, 52, 1),
    new BusScheduleStop("LXN", 17, 55, 1),
    new BusScheduleStop("LXS", 18, 0, 0),
    new BusScheduleStop("ZGC", 19, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,41,42,43,44,45]

data.push(new BusLine("L59", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 21, 2, 1),
    new BusScheduleStop("LXN", 21, 5, 1),
    new BusScheduleStop("LXS", 21, 10, 0),
    new BusScheduleStop("ZGC", 22, 0, 0),
])); //days: [1,2,3,4,5,11,12,13,14,15,25,31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L60", 1, 1).addStopsSelf([
    new BusScheduleStop("LXE", 7, 22, 1),
    new BusScheduleStop("LXN", 7, 25, 1),
    new BusScheduleStop("LXS", 7, 30, 0),
    new BusScheduleStop("ZGC", 8, 50, 0),
])); //days: [31,32,33,34,35,39,41,42,43,44,45]

data.push(new BusLine("L61", 1, 1).addStopsSelf([
    new BusScheduleStop("LXE", 17, 12, 1),
    new BusScheduleStop("LXN", 17, 15, 1),
    new BusScheduleStop("LXS", 17, 20, 0),
    new BusScheduleStop("ZGC", 18, 20, 0),
])); //days: [41,42,43,44,45]

data.push(new BusLine("L62", 1, 1).addStopsSelf([
    new BusScheduleStop("LXE", 12, 22, 1),
    new BusScheduleStop("LXN", 12, 25, 1),
    new BusScheduleStop("LXS", 12, 30, 0),
    new BusScheduleStop("ZGC", 13, 30, 0),
]));

data.push(new BusLine("L63", 1, 1).addStopsSelf([
    new BusScheduleStop("LXE", 19, 52, 1),
    new BusScheduleStop("LXN", 19, 55, 1),
    new BusScheduleStop("LXS", 20, 0, 0),
    new BusScheduleStop("ZGC", 21, 0, 0),
]));

data.push(new BusLine("L64", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 8, 52, 1),
    new BusScheduleStop("LXN", 8, 55, 1),
    new BusScheduleStop("LXS", 9, 0, 0),
    new BusScheduleStop("ZGC", 10, 0, 0),
]));

data.push(new BusLine("L65", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 15, 52, 1),
    new BusScheduleStop("LXN", 15, 55, 1),
    new BusScheduleStop("LXS", 16, 0, 0),
    new BusScheduleStop("ZGC", 17, 0, 0),
]));

data.push(new BusLine("L66", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 20, 22, 1),
    new BusScheduleStop("LXN", 20, 25, 1),
    new BusScheduleStop("LXS", 20, 30, 0),
    new BusScheduleStop("ZGC", 21, 20, 0),
]));

data.push(new BusLine("L67", 0, 1).addStopsSelf([
    new BusScheduleStop("LXE", 18, 52, 1),
    new BusScheduleStop("LXN", 18, 55, 1),
    new BusScheduleStop("LXS", 19, 0, 0),
    new BusScheduleStop("ZGC", 20, 0, 0),
]));

// should always be the last line
data.applySchedule(scheduleLX2ZGC.data);