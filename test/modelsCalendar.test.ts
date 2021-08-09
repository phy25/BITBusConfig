import { DataBusPatternCalendarByMonth } from '../src/models';
import { BusPatternCalendarYear } from '../src/modelsCalendar';
import { BusPatternCalendarDayOverridesYearSingletonRule, BusPatternCalendarWeeklyScheduleRule } from '../src/modelsCalendarRules';
import { getLocalDateFromString } from '../src/modelsDataType';

describe('BusPatternCalendarYear', () => {
    describe('naive test', () => {
        let instance: BusPatternCalendarYear;
        let calendar: DataBusPatternCalendarByMonth;
        beforeAll(() => {
            instance = new BusPatternCalendarYear(2021);
            let rule1 = new BusPatternCalendarWeeklyScheduleRule(
                getLocalDateFromString('2021-01-01'), getLocalDateFromString('2021-06-30'), [0, 1, 2, 3, 4, 5, 6], 1);
            let rule2 = new BusPatternCalendarWeeklyScheduleRule(
                getLocalDateFromString('2021-07-01'), getLocalDateFromString('2021-12-31'), [20, 21, 22, 23, 24, 25, 26], 2);
            let rule3 = new BusPatternCalendarDayOverridesYearSingletonRule(2021, 3);
            rule3.addDayOverride({localDate: getLocalDateFromString('2021-04-30'), schedule: 99});
            rule3.addDayOverride({localDate: getLocalDateFromString('2021-05-31'), schedule: 99});
            let rule4 = new BusPatternCalendarWeeklyScheduleRule(
                getLocalDateFromString('2021-04-01'), getLocalDateFromString('2021-04-30'), [10, 11, 12, 13, 14, 15, 16], 4);

            instance.addRule(rule4);
            instance.addRule(rule3);
            instance.addRule(rule2);
            instance.addRule(rule1);

            calendar = instance.toJSON();
        });

        test.each([
            [0, 31],
            [1, 28],
            [2, 31],
            [3, 30],
            [4, 31],
            [5, 30],
            [6, 31],
            [7, 31],
            [8, 30],
            [9, 31],
            [10, 30],
            [11, 31],
        ])('month_i %d in 2021 should have %d days', (month_i, days) => {
            expect(calendar[month_i].length).toStrictEqual(days);
        });

        test.each([
            [0, 0, 5],
            [0, 1, 6],
            [0, 2, 0],
            [1, 27, 0],
            [2, 30, 3],
            [3, 0, 14],
            [3, 29, 15],
            [4, 30, 99],
            [5, 29, 3],
            [6, 0, 24],
            [6, 1, 25],
            [6, 2, 26],
            [6, 3, 20],
            [6, 4, 21],
            [11, 30, 25],
        ])('month_i %d and date_i %d should return schedule %s', (month_i, date_i, schedule) => {
            expect(calendar[month_i][date_i]).toStrictEqual(schedule);
        });
    });
});