import { BusPatternCalendarDayOverridesYearSingletonRule, BusPatternCalendarWeeklyScheduleRule } from '../src/modelsCalendarRules';
import { getLocalDateFromString } from '../src/modelsDataType';

const START_DATE = getLocalDateFromString('2021-07-23');
const END_DATE = getLocalDateFromString('2021-08-08');

describe('BusPatternCalendarWeeklyScheduleRule', () => {
    describe('regular weekly schedule', () => {
        let instance: BusPatternCalendarWeeklyScheduleRule;

        beforeAll(async () => {
            instance = new BusPatternCalendarWeeklyScheduleRule(START_DATE, END_DATE, [0, 1, 2, 3, 4, 5, 6]);
        });

        test("should return default execution order", () => {
            expect(instance.executionOrder).toBe(BusPatternCalendarWeeklyScheduleRule.DEFAULT_EXECUTION_ORDER);
        });

        test.each([
            ['2021-07-22', false],
            ['2021-07-23', 5],
            ['2021-07-24', 6],
            ['2021-07-25', 0],
            ['2021-07-26', 1],
            ['2021-07-27', 2],
            ['2021-07-28', 3],
            ['2021-07-29', 4],
            ['2021-07-30', 5],
            ['2021-07-31', 6],
            ['2021-08-01', 0],
            ['2021-08-02', 1],
            ['2021-08-07', 6],
            ['2021-08-08', 0],
            ['2021-08-09', false],
            ['2020-07-23', false],
            ['2020-08-08', false],
            ['2022-07-23', false],
            ['2022-08-08', false],
        ])('%s should return schedule %s', (date, schedule) => {
            const dateObj = getLocalDateFromString(date);
            if (schedule === false) {
                expect(instance.isEligible(dateObj)).toStrictEqual(false);
            } else {
                expect(instance.isEligible(dateObj)).toStrictEqual(true);
                expect(instance.getSchedule(dateObj)).toStrictEqual(schedule);
            }
        });
    });

    describe('weekly schedule valid for 1 day', () => {
        let instance: BusPatternCalendarWeeklyScheduleRule;

        beforeAll(async () => {
            instance = new BusPatternCalendarWeeklyScheduleRule(START_DATE, START_DATE, [0, 1, 2, 3, 4, 5, 6]);
        });

        test("should return default execution order", () => {
            expect(instance.executionOrder).toBe(BusPatternCalendarWeeklyScheduleRule.DEFAULT_EXECUTION_ORDER);
        });

        test.each([
            ['2021-07-21', false],
            ['2021-07-22', false],
            ['2021-07-23', 5],
            ['2021-07-24', false],
            ['2021-07-25', false],
        ])('%s should return schedule %s', (date, schedule) => {
            const dateObj = getLocalDateFromString(date);
            if (schedule === false) {
                expect(instance.isEligible(dateObj)).toStrictEqual(false);
            } else {
                expect(instance.isEligible(dateObj)).toStrictEqual(true);
                expect(instance.getSchedule(dateObj)).toStrictEqual(schedule);
            }
        });
    });

    test('should return custom execution order', () => {
        let instance = new BusPatternCalendarWeeklyScheduleRule(START_DATE, END_DATE, [0, 1, 2, 3, 4, 5, 6], 100);
        expect(instance.executionOrder).toBe(100);
    });

    test('should fail with incomplete schedule', () => {
        expect(() => {
            new BusPatternCalendarWeeklyScheduleRule(START_DATE, END_DATE, [0, 1, 2, 3, 4, 5,]);
        }).toThrow();
    });

    test('should fail with negative date ranges', () => {
        expect(() => {
            new BusPatternCalendarWeeklyScheduleRule(END_DATE, START_DATE, [0, 1, 2, 3, 4, 5, 6]);
        }).toThrow();
    });
});

describe('BusPatternCalendarDayOverridesYearSingletonRule', () => {
    describe('regular override', () => {
        let instance: BusPatternCalendarDayOverridesYearSingletonRule;

        beforeAll(async () => {
            instance = new BusPatternCalendarDayOverridesYearSingletonRule(2021);
            instance.addDayOverride({localDate: getLocalDateFromString('2021-07-23'), schedule: 16});
            instance.addDayOverride({localDate: getLocalDateFromString('2021-08-08'), schedule: 17});
        });

        test("should return default execution order", () => {
            expect(instance.executionOrder).toBe(BusPatternCalendarDayOverridesYearSingletonRule.DEFAULT_EXECUTION_ORDER);
        });

        test.each([
            ['2021-07-22', false],
            ['2021-07-23', 16],
            ['2021-07-24', false],
            ['2021-08-07', false],
            ['2021-08-08', 17],
            ['2021-08-09', false],
            ['2020-07-23', false],
            ['2020-08-08', false],
            ['2022-07-23', false],
            ['2022-08-08', false],
        ])('%s should return schedule %s', (date, schedule) => {
            const dateObj = getLocalDateFromString(date);
            if (schedule === false) {
                expect(instance.isEligible(dateObj)).toStrictEqual(false);
            } else {
                expect(instance.isEligible(dateObj)).toStrictEqual(true);
                expect(instance.getSchedule(dateObj)).toStrictEqual(schedule);
            }
        });
    });

    test('should return custom execution order', () => {
        const instance = new BusPatternCalendarDayOverridesYearSingletonRule(2021, 100);
        expect(instance.executionOrder).toBe(100);
    });

    test('should respect overrides that write later', () => {
        const instance = new BusPatternCalendarDayOverridesYearSingletonRule(2021, 100);
        const date = getLocalDateFromString('2021-08-08');
        instance.addDayOverride({localDate: date, schedule: 11});
        instance.addDayOverride({localDate: date, schedule: 12});
        expect(instance.isEligible(date)).toStrictEqual(true);
        expect(instance.getSchedule(date)).toStrictEqual(12);
    });

    describe('addDayOverride not in target year', () => {
        let instance: BusPatternCalendarDayOverridesYearSingletonRule;

        beforeAll(async () => {
            instance = new BusPatternCalendarDayOverridesYearSingletonRule(2021);
        });

        test.each([
            '2020-12-31',
            '2022-01-01',
        ])('%s should throw exception', (date) => {
            expect(() => {
                instance.addDayOverride({localDate: getLocalDateFromString(date), schedule: 10});
            }).toThrow();
        });
    });
});