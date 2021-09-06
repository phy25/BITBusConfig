import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2018);

data.addSemesterRules(
    getLocalDateFromString('2018-01-22'),
    getLocalDateFromString('2018-02-23'),
    getLocalDateFromString('2018-07-01'),
    getLocalDateFromString('2018-08-24'),
    SchedulePatterns.V1_H2O_WORKWEEK,
    SchedulePatterns.V1_HOLIDAYS,
);

data.addHolidayOverride(getLocalDateFromString('2018-01-01'), ScheduleDays.V1_HOLIDAY);
data.addExamWeeksRules(
    getLocalDateFromString('2018-01-08'), getLocalDateFromString('2018-01-19'), SchedulePatterns.V1_H2O_EXAMWEEK,
);
// Rainbow Bus did not start/stop service strictly following the vacation
data.addHolidayOverride(getLocalDateFromString('2018-01-22'), ScheduleDays.V1_H2O_ONLY);
data.addHolidayOverride(getLocalDateFromString('2018-01-23'), ScheduleDays.V1_H2O_ONLY);
data.addHolidayOverride(getLocalDateFromString('2018-01-24'), ScheduleDays.V1_H2O_ONLY);
data.addWeekdayOverride(getLocalDateFromString('2018-02-23'), ScheduleDays.V1_FRIDAY);
data.addLongHolidayRules(
    getLocalDateFromString('2018-04-05'), getLocalDateFromString('2018-04-08'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2018-04-05')], ScheduleDays.V1_HOLIDAY,
);
data.addLongHolidayRules(
    getLocalDateFromString('2018-04-28'), getLocalDateFromString('2018-05-01'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2018-05-01')], ScheduleDays.V1_HOLIDAY,
);
data.addLongHolidayRules(
    getLocalDateFromString('2018-06-16'), getLocalDateFromString('2018-06-18'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2018-06-18')], ScheduleDays.V1_HOLIDAY,
);
data.addExamWeeksRules(
    getLocalDateFromString('2018-06-19'), getLocalDateFromString('2018-06-29'), SchedulePatterns.V1_H2O_EXAMWEEK,
);

// Back-to-school special service https://www.bit.edu.cn/ggfw/bcfw/a157953.htm
data.addWeekdayOverride(getLocalDateFromString('2018-08-24'), ScheduleDays.V1_FRIDAY_AS_REGULAR);
data.addLongHolidayRules(
    getLocalDateFromString('2018-09-22'), getLocalDateFromString('2018-09-24'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2018-09-24')], ScheduleDays.V1_HOLIDAY,
);
data.addLongHolidayRules(
    getLocalDateFromString('2018-10-01'), getLocalDateFromString('2018-10-07'), ScheduleDays.V1_HOLIDAY, null,
    [], ScheduleDays.V1_HOLIDAY,
);
data.addWeekdayOverride(getLocalDateFromString('2018-12-29'), ScheduleDays.V1_H2O_TUESDAY); // weekend as weekday
data.addLongHolidayRules(
    getLocalDateFromString('2018-12-30'), getLocalDateFromString('2018-12-31'), ScheduleDays.V1_WEEKEND, null,
    [], ScheduleDays.V1_HOLIDAY,
);
