import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";

export const data = new BITBusPatternCalendarYear(2018);

data.addSemesterRules(
    getLocalDateFromString('2018-01-22'),
    getLocalDateFromString('2018-02-23'),
    getLocalDateFromString('2018-07-01'),
    getLocalDateFromString('2018-08-24'),
    [6, 11, 12, 13, 14, 15, 6],
    [0, 0, 0, 0, 0, 0, 0],
);

data.addHolidayOverride(getLocalDateFromString('2018-01-01'), 0);
data.addExamWeeksRules(
    getLocalDateFromString('2018-01-08'), getLocalDateFromString('2018-01-19'), [6, 19, 19, 19, 19, 19, 6],
);
// Rainbow Bus did not start/stop service strictly following the vacation
data.addHolidayOverride(getLocalDateFromString('2018-01-22'), 10);
data.addHolidayOverride(getLocalDateFromString('2018-01-23'), 10);
data.addHolidayOverride(getLocalDateFromString('2018-01-24'), 10);
data.addWeekdayOverride(getLocalDateFromString('2018-02-23'), 5);
data.addLongHolidayRules(
    getLocalDateFromString('2018-04-05'), getLocalDateFromString('2018-04-08'), 6, null,
    [getLocalDateFromString('2018-04-05')], 0,
);
data.addLongHolidayRules(
    getLocalDateFromString('2018-04-28'), getLocalDateFromString('2018-05-01'), 6, null,
    [getLocalDateFromString('2018-05-01')], 0,
);
data.addLongHolidayRules(
    getLocalDateFromString('2018-06-16'), getLocalDateFromString('2018-06-18'), 6, null,
    [getLocalDateFromString('2018-06-18')], 0,
);
data.addExamWeeksRules(
    getLocalDateFromString('2018-06-19'), getLocalDateFromString('2018-06-29'), [6, 19, 19, 19, 19, 19, 6],
);

// Back-to-school special service https://www.bit.edu.cn/ggfw/bcfw/a157953.htm
data.addWeekdayOverride(getLocalDateFromString('2018-08-24'), 25);
data.addLongHolidayRules(
    getLocalDateFromString('2018-09-22'), getLocalDateFromString('2018-09-24'), 6, null,
    [getLocalDateFromString('2018-09-24')], 0,
);
data.addLongHolidayRules(
    getLocalDateFromString('2018-10-01'), getLocalDateFromString('2018-10-07'), 0, null,
    [], 0,
);
data.addWeekdayOverride(getLocalDateFromString('2018-12-29'), 12); // weekend as weekday
data.addLongHolidayRules(
    getLocalDateFromString('2018-12-30'), getLocalDateFromString('2018-12-31'), 6, null,
    [], 0,
);
