import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";

export const data = new BITBusPatternCalendarYear(2019);

// https://www.bit.edu.cn/ggfw/bcfw/a164664.htm
data.addSemesterRules(
    getLocalDateFromString('2019-01-20'),
    getLocalDateFromString('2019-02-22'),
    getLocalDateFromString('2019-04-14'),
    null,
    [36, 31, 32, 33, 34, 35, 36],
    [0, 0, 0, 0, 0, 0, 0],
);

data.addHolidayOverride(getLocalDateFromString('2019-01-01'), 0);
data.addExamWeeksRules(
    getLocalDateFromString('2019-01-07'), getLocalDateFromString('2019-01-18'), [36, 39, 39, 39, 39, 39, 36],
);
data.addHolidayOverride(getLocalDateFromString('2019-04-05'), 0);

// https://www.bit.edu.cn/tzgg17/ggxx/a167291.htm
data.addSemesterRules(
    null,
    getLocalDateFromString('2019-04-15'),
    getLocalDateFromString('2019-06-30'),
    getLocalDateFromString('2019-08-23'),
    [36, 41, 42, 43, 44, 45, 36],
    [0, 0, 0, 0, 0, 0, 0],
);
data.addHolidayOverride(getLocalDateFromString('2019-05-01'), 0);
data.addHolidayOverride(getLocalDateFromString('2019-06-07'), 0);
// missing exam week https://www.bit.edu.cn/ggfw/bcfw/a171613.htm
// missing summer semester https://www.bit.edu.cn/ggfw/bcfw/a172434.htm

data.addHolidayOverride(getLocalDateFromString('2019-09-13'), 0);
data.addLongHolidayRules(
    getLocalDateFromString('2019-09-30'), getLocalDateFromString('2019-10-07'), 0, null,
    [getLocalDateFromString('2019-09-30')], 36,
);
data.addWeekdayOverride(getLocalDateFromString('2019-10-12'), 41);
