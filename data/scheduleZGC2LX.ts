import { BusScheduleDayLineMap, convertKeyToNumber } from "../src/modelsBuses";

export const data: BusScheduleDayLineMap = new Map(Object.entries({
    // v1 Monday to Friday
    1: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"],
    2: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"],
    3: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"],
    4: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9"],
    5: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "Z10"],
    // v2 Friday addition
    25: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "Z0-1"],
    // v1 weekend
    6: ["Z11", "Z12", "Z13"],
    // v1 holiday
    0: ["Z14", "Z15"],
    // v1 exam week
    9: ["Z2E", "Z5", "Z8E"],
    // v1 + H2O Monday to Friday
    11: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"],
    12: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"],
    13: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"],
    14: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "H2OZ1", "H2OZ2"],
    15: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6", "Z7", "Z8", "Z9", "Z10", "H2OZ1", "H2OZ2"],
    // v1 + H2O exam week
    19: ["Z2E", "Z5", "Z8E", "H2OZ1", "H2OZ2"],
    // v1 H2O service only
    10: ["H2OZ1", "H2OZ2"],
    // v3 + H2O Monday to Friday
    31: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"],
    32: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"],
    33: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"],
    34: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"],
    35: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z21", "Z22", "H2OZ1", "H2OZ2"],
    // v3 weekend
    36: ["Z11", "Z12", "Z13", "Z16"],
    // v3 + H2O exam week
    39: ["Z2E", "Z5", "Z8E", "Z9", "Z22", "H2OZ1", "H2OZ2"],
    // v4 + H2O Monday to Friday
    41: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"],
    42: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"],
    43: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"],
    44: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"],
    45: ["Z1", "Z2", "Z3", "Z5", "Z6", "Z7", "Z8", "Z9", "Z22", "Z31", "H2OZ1", "H2OZ2"],
}).map(convertKeyToNumber));
