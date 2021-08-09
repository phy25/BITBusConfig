import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { DataBusPatternCalendarByYear } from "../src/models";
import { getLocalDateFromString } from "../src/modelsDataType";
import { BusPatternCalendarWeeklyScheduleRule } from "../src/modelsCalendarRules";

export const dayRanges = [
    "2017-01-01",
    "2021-08-27"
];

// ================================ 2017 ================================

const busPatternCalendar2017 = new BITBusPatternCalendarYear(2017);

busPatternCalendar2017.addSemesterRules(
    getLocalDateFromString('2017-01-22'),
    getLocalDateFromString('2017-02-25'), // Saturday, respecting old data
    getLocalDateFromString('2017-07-02'),
    getLocalDateFromString('2017-08-26'), // Saturday, respecting old data
    [6, 1, 2, 3, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 0],
);

busPatternCalendar2017.addLongHolidayRules(
    getLocalDateFromString('2017-01-01'), getLocalDateFromString('2017-01-02'), 6, null,
    [getLocalDateFromString('2017-01-01')], 0,
);
busPatternCalendar2017.addWeekdayOverride(getLocalDateFromString('2017-04-01'), 1); // weekend as weekday
busPatternCalendar2017.addLongHolidayRules(
    getLocalDateFromString('2017-04-02'), getLocalDateFromString('2017-04-04'), 6, null,
    [getLocalDateFromString('2017-04-04')], 0,
);
busPatternCalendar2017.addLongHolidayRules(
    getLocalDateFromString('2017-04-29'), getLocalDateFromString('2017-05-01'), 6, null,
    [getLocalDateFromString('2017-05-01')], 0,
);
busPatternCalendar2017.addLongHolidayRules(
    getLocalDateFromString('2017-05-27'), getLocalDateFromString('2017-05-30'), 6, null,
    [getLocalDateFromString('2017-05-30')], 0,
);
busPatternCalendar2017.addExamWeeksRules(
    getLocalDateFromString('2017-06-19'), getLocalDateFromString('2017-06-30'), [6, 9, 9, 9, 9, 9, 6],
);
busPatternCalendar2017.addLongHolidayRules(
    getLocalDateFromString('2017-10-01'), getLocalDateFromString('2017-10-08'), 6, null,
    [getLocalDateFromString('2017-10-01'), getLocalDateFromString('2017-10-02'), getLocalDateFromString('2017-10-03'), getLocalDateFromString('2017-10-04')], 0,
);

// Rainbow Bus started service
busPatternCalendar2017.addRule(new BusPatternCalendarWeeklyScheduleRule(
    getLocalDateFromString('2017-12-18'),
    getLocalDateFromString('2017-12-31'),
    [6, 11, 12, 13, 14, 15, 6],
    busPatternCalendar2017.vendExecutionOrder(),
));

export const busPatternCalendar: DataBusPatternCalendarByYear = {
    '2017': busPatternCalendar2017,
};