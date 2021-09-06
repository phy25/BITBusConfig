import { BusScheduleDayLineMap, convertKeyToNumber } from "../src/modelsBuses";

export const data: BusScheduleDayLineMap = new Map(Object.entries({
    // v1 Monday to Friday
    1: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"],
    2: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"],
    3: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"],
    4: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"],
    5: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10"],
    // v1 Friday as regular weekday
    25: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"],
    // v1 weekend
    6: ["L11", "L12", "L13"],
    // v1 holiday
    0: ["L14", "L15"],
    // v1 exam week
    9: ["L1", "L4", "L7E"],
    // v1 + H2O Monday to Friday
    11: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"],
    12: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"],
    13: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"],
    14: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "H2OL1", "H2OL2"],
    15: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "H2OL1", "H2OL2"],
    // v1 + H2O exam week
    19: ["L1", "L4", "L7E", "H2OL1", "H2OL2"],
    // v1 H2O service only
    10: ["H2OL1", "H2OL2"],
    // v3 + H2O Monday to Friday
    31: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"],
    32: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"],
    33: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"],
    34: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"],
    35: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L21", "H2OL1", "H2OL3"],
    // v3 weekend
    36: ["L11", "L12", "L13", "L16"],
    // v3 + H2O exam week
    39: ["L1", "L4", "L7E", "L9", "L21", "H2OL1", "H2OL3"],
    // v3 H2O service only - not sure if this is used at all and it's weird
    30: ["H2OL3"],
    // v4 + H2O Monday to Friday
    41: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"],
    42: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"],
    43: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"],
    44: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"],
    45: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L21", "L31", "H2OL1", "H2OL3"],
}).map(convertKeyToNumber));
