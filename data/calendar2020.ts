import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2020);

data.addSemesterRules(
    getLocalDateFromString('2020-01-19'),
    // actual spring semester 2020 https://www.bit.edu.cn/tzgg17/ggxx/a183665.htm
    getLocalDateFromString('2020-05-08'),
    null,
    null,
    SchedulePatterns.V4_H2O_WORKWEEK,
    SchedulePatterns.V4_HOLIDAYS,
);

data.addHolidayOverride(getLocalDateFromString('2020-01-01'), ScheduleDays.V1_HOLIDAY);
// missing Janunary exam week http://www.bit.edu.cn/ggfw/bcfw/a182102.htm

data.addSemesterRules(
    null,
    // May service recovery https://www.bit.edu.cn/ggfw/bcfw/a185006.htm
    getLocalDateFromString('2020-05-08'),
    getLocalDateFromString('2020-06-28'),
    getLocalDateFromString('2020-08-21'),
    SchedulePatterns.V4_REDUCED_WORKWEEK,
    SchedulePatterns.V4_REDUCED_HOLIDAYS,
);

// orientation special service https://www.bit.edu.cn/ggfw/bcfw/a189671.htm
data.addLongHolidayRules(
    getLocalDateFromString('2020-08-28'), getLocalDateFromString('2020-09-03'), ScheduleDays.V4_ORIENTATION_DAY, null,
    [], ScheduleDays.V1_HOLIDAY,
);

// anniversary https://hqjjc.bit.edu.cn/tzgg/b186059.htm
data.addWeekdayOverride(getLocalDateFromString('2020-09-19'), ScheduleDays.V4_WORKDAY);

data.addSemesterRules(
    null,
    null,
    null,
    getLocalDateFromString('2020-09-27'),
    SchedulePatterns.V5_H2O_WORKWEEK,
    SchedulePatterns.V5_HOLIDAYS,
);

data.addWeekdayOverride(getLocalDateFromString('2020-09-27'), ScheduleDays.V5_H2O_THURSDAY);
data.addLongHolidayRules(
    getLocalDateFromString('2020-10-01'), getLocalDateFromString('2020-10-08'), ScheduleDays.V1_HOLIDAY, null,
    [], ScheduleDays.V1_HOLIDAY,
);
data.addWeekdayOverride(getLocalDateFromString('2020-10-10'), ScheduleDays.V5_H2O_THURSDAY);
