import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { BusPatternCalendarWeeklyScheduleRule } from "../src/modelsCalendarRules";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2017);

data.addSemesterRules(
    getLocalDateFromString('2017-01-22'),
    getLocalDateFromString('2017-02-25'), // Saturday, respecting old data
    getLocalDateFromString('2017-07-02'),
    getLocalDateFromString('2017-08-26'), // Saturday, respecting old data
    SchedulePatterns.V1_WORKWEEK,
    SchedulePatterns.V1_HOLIDAYS,
);

data.addLongHolidayRules(
    getLocalDateFromString('2017-01-01'), getLocalDateFromString('2017-01-02'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2017-01-01')], ScheduleDays.V1_HOLIDAY,
);
// missing exam week rules
data.addWeekdayOverride(getLocalDateFromString('2017-04-01'), 1); // weekend as weekday
data.addLongHolidayRules(
    getLocalDateFromString('2017-04-02'), getLocalDateFromString('2017-04-04'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2017-04-04')], ScheduleDays.V1_HOLIDAY,
);
data.addLongHolidayRules(
    getLocalDateFromString('2017-04-29'), getLocalDateFromString('2017-05-01'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2017-05-01')], ScheduleDays.V1_HOLIDAY,
);
data.addLongHolidayRules(
    getLocalDateFromString('2017-05-27'), getLocalDateFromString('2017-05-30'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2017-05-30')], ScheduleDays.V1_HOLIDAY,
);
data.addExamWeeksRules(
    getLocalDateFromString('2017-06-19'), getLocalDateFromString('2017-06-30'), SchedulePatterns.V1_EXAMWEEK,
);

data.addLongHolidayRules(
    getLocalDateFromString('2017-10-01'), getLocalDateFromString('2017-10-08'), ScheduleDays.V1_WEEKEND, null,
    [getLocalDateFromString('2017-10-01'), getLocalDateFromString('2017-10-02'), getLocalDateFromString('2017-10-03'), getLocalDateFromString('2017-10-04')], ScheduleDays.V1_HOLIDAY,
);
// Rainbow Bus started service
data.addRule(new BusPatternCalendarWeeklyScheduleRule(
    getLocalDateFromString('2017-12-18'),
    getLocalDateFromString('2017-12-31'),
    SchedulePatterns.V1_H2O_WORKWEEK,
    data.vendExecutionOrder(),
));
