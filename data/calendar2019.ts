import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2019);

data.addSemesterRules(
    getLocalDateFromString('2019-01-20'),
    getLocalDateFromString('2019-02-22'),
    getLocalDateFromString('2019-04-14'),
    null,
    SchedulePatterns.V3_H2O_WORKWEEK,
    SchedulePatterns.V3_HOLIDAYS,
);

data.addHolidayOverride(getLocalDateFromString('2019-01-01'), ScheduleDays.V1_HOLIDAY);
data.addExamWeeksRules(
    getLocalDateFromString('2019-01-07'), getLocalDateFromString('2019-01-18'), SchedulePatterns.V3_H2O_EXAMWEEK,
);
data.addHolidayOverride(getLocalDateFromString('2019-04-05'), ScheduleDays.V1_HOLIDAY);

data.addSemesterRules(
    null,
    getLocalDateFromString('2019-04-15'),
    getLocalDateFromString('2019-06-30'),
    getLocalDateFromString('2019-08-23'),
    SchedulePatterns.V4_H2O_WORKWEEK,
    SchedulePatterns.V4_HOLIDAYS,
);
data.addHolidayOverride(getLocalDateFromString('2019-05-01'), ScheduleDays.V1_HOLIDAY);
data.addHolidayOverride(getLocalDateFromString('2019-06-07'), ScheduleDays.V1_HOLIDAY);
// missing exam week https://www.bit.edu.cn/ggfw/bcfw/a171613.htm
// missing summer semester https://www.bit.edu.cn/ggfw/bcfw/a172434.htm

data.addHolidayOverride(getLocalDateFromString('2019-09-13'), ScheduleDays.V1_HOLIDAY);
data.addLongHolidayRules(
    getLocalDateFromString('2019-09-30'), getLocalDateFromString('2019-10-07'), ScheduleDays.V1_HOLIDAY, null,
    [getLocalDateFromString('2019-09-30')], ScheduleDays.V3_WEEKEND,
);
data.addWeekdayOverride(getLocalDateFromString('2019-10-12'), ScheduleDays.V4_H2O_MONDAY);
