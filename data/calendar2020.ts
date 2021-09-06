import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";
import { ScheduleDays } from "./scheduleDays";
import * as SchedulePatterns from "./schedulePatterns";

export const data = new BITBusPatternCalendarYear(2020);

data.addSemesterRules(
    getLocalDateFromString('2020-01-19'),
    getLocalDateFromString('2020-02-21'),
    getLocalDateFromString('2020-06-28'),
    getLocalDateFromString('2020-08-21'),
    SchedulePatterns.V4_H2O_WORKWEEK,
    SchedulePatterns.V4_HOLIDAYS,
);

data.addHolidayOverride(getLocalDateFromString('2020-01-01'), ScheduleDays.V1_HOLIDAY);
// missing exam week http://www.bit.edu.cn/ggfw/bcfw/a182102.htm
// I don't think this is actually happening https://www.bit.edu.cn/ggfw/bcfw/a182446.htm

// missing actual spring semester 2020 https://www.bit.edu.cn/tzgg17/ggxx/a183665.htm
// 中关村-良乡2趟，8:00 / 15:00各一班，良乡-中关村2趟，9:00 / 16:00点各一班

// missing May service recovery https://www.bit.edu.cn/ggfw/bcfw/a185006.htm

// missing back to school special service https://www.bit.edu.cn/ggfw/bcfw/a189671.htm
// missing new stops https://www.bit.edu.cn/ggfw/bcfw/a190824.htm
// National day should be corrected to https://www.bit.edu.cn/tzgg17/ggxx/a190174.htm
data.addLongHolidayRules(
    getLocalDateFromString('2020-10-01'), getLocalDateFromString('2020-10-07'), ScheduleDays.V1_HOLIDAY, null,
    [], ScheduleDays.V1_HOLIDAY,
);
