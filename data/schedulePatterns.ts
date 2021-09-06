import { ScheduleDays } from "./scheduleDays";

export const V1_WORKWEEK = [
    ScheduleDays.V1_WEEKEND, ScheduleDays.V1_MONDAY, ScheduleDays.V1_TUESDAY, ScheduleDays.V1_WEDNESDAY,
    ScheduleDays.V1_THURSDAY, ScheduleDays.V1_FRIDAY, ScheduleDays.V1_WEEKEND
];

export const V1_EXAMWEEK = [
    ScheduleDays.V1_WEEKEND, ScheduleDays.V1_EXAMDAY, ScheduleDays.V1_EXAMDAY, ScheduleDays.V1_EXAMDAY,
    ScheduleDays.V1_EXAMDAY, ScheduleDays.V1_EXAMDAY, ScheduleDays.V1_WEEKEND
];

export const V1_HOLIDAYS: ScheduleDays[] = Array(7).fill(ScheduleDays.V1_HOLIDAY);

export const V1_H2O_WORKWEEK = [
    ScheduleDays.V1_WEEKEND, ScheduleDays.V1_H2O_MONDAY, ScheduleDays.V1_H2O_TUESDAY, ScheduleDays.V1_H2O_WEDNESDAY,
    ScheduleDays.V1_H2O_THURSDAY, ScheduleDays.V1_H2O_FRIDAY, ScheduleDays.V1_WEEKEND
];

export const V1_H2O_EXAMWEEK = [
    ScheduleDays.V1_WEEKEND, ScheduleDays.V1_H2O_EXAMDAY, ScheduleDays.V1_H2O_EXAMDAY, ScheduleDays.V1_H2O_EXAMDAY,
    ScheduleDays.V1_H2O_EXAMDAY, ScheduleDays.V1_H2O_EXAMDAY, ScheduleDays.V1_WEEKEND
];

// https://www.bit.edu.cn/ggfw/bcfw/a164664.htm
export const V3_H2O_WORKWEEK = [
    ScheduleDays.V3_WEEKEND, ScheduleDays.V3_H2O_MONDAY, ScheduleDays.V3_H2O_TUESDAY, ScheduleDays.V3_H2O_WEDNESDAY,
    ScheduleDays.V3_H2O_THURSDAY, ScheduleDays.V3_H2O_FRIDAY, ScheduleDays.V3_WEEKEND
];

export const V3_H2O_EXAMWEEK = [
    ScheduleDays.V3_WEEKEND, ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_H2O_EXAMDAY,
    ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_WEEKEND
];

export const V3_HOLIDAYS = V1_HOLIDAYS;

// https://www.bit.edu.cn/tzgg17/ggxx/a167291.htm
export const V4_H2O_WORKWEEK = [
    ScheduleDays.V3_WEEKEND, ScheduleDays.V4_H2O_MONDAY, ScheduleDays.V4_H2O_TUESDAY, ScheduleDays.V4_H2O_WEDNESDAY,
    ScheduleDays.V4_H2O_THURSDAY, ScheduleDays.V4_H2O_FRIDAY, ScheduleDays.V3_WEEKEND
];

export const V4_H2O_EXAMWEEK = [
    ScheduleDays.V3_WEEKEND, ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_H2O_EXAMDAY,
    ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_H2O_EXAMDAY, ScheduleDays.V3_WEEKEND
];

export const V4_HOLIDAYS = V1_HOLIDAYS;
