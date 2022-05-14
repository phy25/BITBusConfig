import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2022);

data.addSemesterRules(
    getLocalDateFromString('2022-01-11'),
    getLocalDateFromString('2022-02-18'),
    getLocalDateFromString('2022-06-26'),
    getLocalDateFromString('2022-08-19'),
    SchedulePatterns.V4_H2O_WORKWEEK,
    SchedulePatterns.V4_HOLIDAYS,
);

data.addHolidayOverride(getLocalDateFromString('2022-01-01'), ScheduleDays.V1_HOLIDAY);
data.addHolidayOverride(getLocalDateFromString('2022-01-03'), ScheduleDays.V3_WEEKEND);

// https://www.bit.edu.cn/tzgg17/ggxx/14a3ea1597f74a1c83ce65edc1477bb9.htm
// 05-22 is a placeholder date; currently service suspended indefinitely
data.addLongHolidayRules(
    getLocalDateFromString('2022-05-14'), getLocalDateFromString('2021-05-22'), ScheduleDays.SERVICE_SUSPENDED, null,
    [], ScheduleDays.SERVICE_SUSPENDED);

// missing LX subway https://www.bit.edu.cn/tzgg17/ggxx/6808acbfb5e4472da69b2c0d57fc42ec.htm

// missing holidays

// missing sports special service

// missing exam weeks

// missing summer semester

// missing national day
