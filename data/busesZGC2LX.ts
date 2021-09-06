import { BusesDestList, BusLine, BusScheduleStop } from "../src/modelsBuses";
import { DataBusesDestList } from "../src/models";

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

data.push(new BusLine("Z14", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 8, 0, 0),
    new BusScheduleStop("LXS", 8, 50, 0),
])); //days: [0]

data.push(new BusLine("Z15", 1, 1).addStopsSelf([
    new BusScheduleStop("ZGC", 15, 0, 0),
    new BusScheduleStop("LXS", 15, 50, 0),
])); //days: [0]

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