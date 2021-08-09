import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { BusPatternCalendarWeeklyScheduleRule } from "../src/modelsCalendarRules";
import { getLocalDateFromString } from "../src/modelsDataType";

export const data = new BITBusPatternCalendarYear(2017);

data.addSemesterRules(
    getLocalDateFromString('2017-01-22'),
    getLocalDateFromString('2017-02-25'), // Saturday, respecting old data
    getLocalDateFromString('2017-07-02'),
    getLocalDateFromString('2017-08-26'), // Saturday, respecting old data
    [6, 1, 2, 3, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 0],
);

data.addLongHolidayRules(
    getLocalDateFromString('2017-01-01'), getLocalDateFromString('2017-01-02'), 6, null,
    [getLocalDateFromString('2017-01-01')], 0,
);
// missing exam week rules
data.addWeekdayOverride(getLocalDateFromString('2017-04-01'), 1); // weekend as weekday
data.addLongHolidayRules(
    getLocalDateFromString('2017-04-02'), getLocalDateFromString('2017-04-04'), 6, null,
    [getLocalDateFromString('2017-04-04')], 0,
);
data.addLongHolidayRules(
    getLocalDateFromString('2017-04-29'), getLocalDateFromString('2017-05-01'), 6, null,
    [getLocalDateFromString('2017-05-01')], 0,
);
data.addLongHolidayRules(
    getLocalDateFromString('2017-05-27'), getLocalDateFromString('2017-05-30'), 6, null,
    [getLocalDateFromString('2017-05-30')], 0,
);
data.addExamWeeksRules(
    getLocalDateFromString('2017-06-19'), getLocalDateFromString('2017-06-30'), [6, 9, 9, 9, 9, 9, 6],
);

data.addLongHolidayRules(
    getLocalDateFromString('2017-10-01'), getLocalDateFromString('2017-10-08'), 6, null,
    [getLocalDateFromString('2017-10-01'), getLocalDateFromString('2017-10-02'), getLocalDateFromString('2017-10-03'), getLocalDateFromString('2017-10-04')], 0,
);
// Rainbow Bus started service
data.addRule(new BusPatternCalendarWeeklyScheduleRule(
    getLocalDateFromString('2017-12-18'),
    getLocalDateFromString('2017-12-31'),
    [6, 11, 12, 13, 14, 15, 6],
    data.vendExecutionOrder(),
));
