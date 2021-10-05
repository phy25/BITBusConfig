import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2021);

data.addHolidayOverride(getLocalDateFromString('2021-01-01'), ScheduleDays.V5_WEEKEND);
data.addHolidayOverride(getLocalDateFromString('2021-01-02'), ScheduleDays.V5_WEEKEND);
data.addHolidayOverride(getLocalDateFromString('2021-01-03'), ScheduleDays.V5_WEEKEND);

// v6 https://hqjjc.bit.edu.cn/tzgg/9850bf8b5d824241b64c109e266eb2f3.htm
data.addSemesterRules(
    getLocalDateFromString('2021-01-04'),
    getLocalDateFromString('2021-02-26'),
    getLocalDateFromString('2021-07-04'),
    null,
    SchedulePatterns.V6_H2O_WORKWEEK,
    SchedulePatterns.V6_HOLIDAYS,
);

// missing LX subway https://www.bit.edu.cn/tzgg17/ggxx/6808acbfb5e4472da69b2c0d57fc42ec.htm

data.addHolidayOverride(getLocalDateFromString('2021-04-05'), ScheduleDays.V5_WEEKEND);

data.addLongHolidayRules(
    getLocalDateFromString('2021-05-01'), getLocalDateFromString('2021-05-05'), ScheduleDays.V5_WEEKEND, null,
    [], ScheduleDays.V5_WEEKEND);
data.addWeekdayOverride(getLocalDateFromString('2021-04-25'), ScheduleDays.V5_H2O_MONDAY);
data.addWeekdayOverride(getLocalDateFromString('2021-05-08'), ScheduleDays.V5_H2O_TUESDAY);

// missing sports special service https://www.bit.edu.cn/tzgg17/ggxx/4761ab03f51c4c5dadfdef01284be06a.htm

data.addHolidayOverride(getLocalDateFromString('2021-06-14'), ScheduleDays.V5_WEEKEND);

// missing exam weeks https://www.bit.edu.cn/tzgg17/ggxx/c30dcce7428b493781e5b1544ae95dcd.htm

// summer week https://www.bit.edu.cn/tzgg17/ggxx/09cbbcd091f64ba8a6bce9d7bdc820eb.htm
// v7 https://www.bit.edu.cn/tzgg17/ggxx/afcd9723d01349219a7054b0628f0240.htm
data.addSemesterRules(
    null,
    null,
    getLocalDateFromString('2021-07-04'),
    getLocalDateFromString('2021-08-19'),
    SchedulePatterns.V7_H2O_WORKWEEK,
    SchedulePatterns.V6_H2O_SUMMERWEEK,
);

data.addLongHolidayRules(
    getLocalDateFromString('2021-09-19'), getLocalDateFromString('2021-09-21'), ScheduleDays.V7_WEEKEND, null,
    [getLocalDateFromString('2021-09-21')], ScheduleDays.V7_WEEKEND,
);
data.addWeekdayOverride(getLocalDateFromString('2021-09-26'), ScheduleDays.V7_H2O_FRIDAY);
data.addLongHolidayRules(
    getLocalDateFromString('2021-10-01'), getLocalDateFromString('2021-10-10'), ScheduleDays.V7_WEEKEND, null,
    [], ScheduleDays.V7_WEEKEND,
);
