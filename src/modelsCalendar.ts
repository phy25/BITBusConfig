import { DataBusPatternCalendarByMonth } from "./models";
import { BusPatternCalendarWeeklyScheduleRule, BusPatternCalendarDayOverridesYearSingletonRule, BusPatternCalendarRule } from "./modelsCalendarRules";
import { BusPatternSchedule, getLocalDateFromString, MILLISECONDS_IN_DAY } from "./modelsDataType";
import { ScheduleDays } from "../data/scheduleDays";

export class BusPatternCalendarYear {
    year: number;
    rules: BusPatternCalendarRule[] = [];

    constructor(year: number) {
        this.year = year;
    }

    addRule(rule: BusPatternCalendarRule): void {
        this.rules.push(rule);
        this.rules.sort((a, b) => a.executionOrder - b.executionOrder);
    }

    toCalendar(failOnNoResult: boolean): DataBusPatternCalendarByMonth {
        // console.log(this.rules);
        const startLocalDate = getLocalDateFromString(this.year + '-01-01');
        const endLocalDate = getLocalDateFromString((this.year + 1) + '-01-01');
        // const endLocalDate = getLocalDateFromString((this.year) + '-03-01');
        const endTimestamp = +endLocalDate;
        let calendar: DataBusPatternCalendarByMonth = [];
        [...Array(12).keys()].forEach(i => {
            calendar[i] = [];
        });

        for (let localTimestamp = +startLocalDate; localTimestamp < endTimestamp; localTimestamp += MILLISECONDS_IN_DAY){
            const localDate = new Date(localTimestamp);
            let schedule: BusPatternSchedule | null = null;
            let rulesHit = 0;

            // call all rules
            this.rules.forEach((rule) => {
                if (rule.isEligible(localDate)) {
                    schedule = rule.getSchedule(localDate);
                    rulesHit += 1;
                }
            });

            // console.log(localDate, schedule, rulesHit);

            if (schedule === null) {
                if (failOnNoResult) {
                    throw new Error("No schedule for" + localDate);
                }
            }
            calendar[localDate.getMonth()][localDate.getDate() - 1] = schedule;
        }

        return calendar;
    }

    toJSON(): DataBusPatternCalendarByMonth {
        return this.toCalendar(true);
    }
};

export class BITBusPatternCalendarYear extends BusPatternCalendarYear {
    static readonly RAINBOW_BUS_AVAILABLE_WEEKLY_SCHEDULE: BusPatternSchedule[] = [];
    static readonly ONLY_CAMPUS_BUS_WEEKLY_SCHEDULE: BusPatternSchedule[] = [];
    static readonly VACATION_WEEKLY_SCHEDULE: BusPatternSchedule[] = [];
    static readonly RAINBOW_BUS_AVAILABLE_START_2018: number = +getLocalDateFromString('');

    readonly dayOverridesRule: BusPatternCalendarDayOverridesYearSingletonRule;
    private currentExecutionOrder: number = BusPatternCalendarWeeklyScheduleRule.DEFAULT_EXECUTION_ORDER;

    readonly firstDayOfYear: Date;
    readonly lastDayOfYear: Date;

    constructor(year: number) {
        super(year);
        this.firstDayOfYear = getLocalDateFromString(this.year + '-01-01');
        this.lastDayOfYear = getLocalDateFromString(this.year + '-12-31');
        this.dayOverridesRule = new BusPatternCalendarDayOverridesYearSingletonRule(year);
        this.addRule(this.dayOverridesRule);
    }

    vendExecutionOrder(): number {
        if (this.currentExecutionOrder >= this.dayOverridesRule.executionOrder) {
            throw Error("rules exceeded upper bound set by dayOverridesRule");
        }
        return this.currentExecutionOrder++;
    }

    getSemesterWeeklySchedule(rangeStartLocalDate: Date): BusPatternSchedule[] {
        let timestamp = +rangeStartLocalDate;
        if (timestamp >= BITBusPatternCalendarYear.RAINBOW_BUS_AVAILABLE_START_2018) {
            return BITBusPatternCalendarYear.RAINBOW_BUS_AVAILABLE_WEEKLY_SCHEDULE;
        } else {
            return BITBusPatternCalendarYear.ONLY_CAMPUS_BUS_WEEKLY_SCHEDULE;
        }
    }

    addSemesterRules(
        lastLocalSundayLastFallSemester: Date | null,
        checkInLocalFridaySpringSemester: Date | null,
        lastLocalSundaySpringSemester: Date | null,
        checkInLocalFridayFallSemester: Date | null,
        semesterWeeklySchedule: BusPatternSchedule[],
        vacationWeeklySchedule: BusPatternSchedule[],
        executionOrder?: number,
        ): void {
            if (!executionOrder) {
                executionOrder = this.vendExecutionOrder();
            }

            // console.log([this.firstDayOfYear, lastLocalSundayLastFallSemester, checkInLocalFridaySpringSemester,
            //     lastLocalSundaySpringSemester, checkInLocalFridayFallSemester, this.lastDayOfYear]);

            // 01-01 - lastLocalFridayLastFallSemester: last fall semester
            if (lastLocalSundayLastFallSemester) {
                this.addRule(new BusPatternCalendarWeeklyScheduleRule(
                    this.firstDayOfYear, lastLocalSundayLastFallSemester, semesterWeeklySchedule, executionOrder));
            }
            // lastLocalFridayLastFallSemester - checkInLocalFridaySpringSemester: spring festival
            if (lastLocalSundayLastFallSemester && checkInLocalFridaySpringSemester) {
                let firstLocalDateSpringFestival = new Date(+lastLocalSundayLastFallSemester + MILLISECONDS_IN_DAY);
                let lastLocalDateSpringFestival = new Date(+checkInLocalFridaySpringSemester - MILLISECONDS_IN_DAY);
                this.addRule(new BusPatternCalendarWeeklyScheduleRule(
                    firstLocalDateSpringFestival, lastLocalDateSpringFestival, vacationWeeklySchedule, executionOrder));
            }
            // checkInLocalFridaySpringSemester - lastLocalFridaySpringSemester: sprint semester
            if (checkInLocalFridaySpringSemester && lastLocalSundaySpringSemester) {
                this.addRule(new BusPatternCalendarWeeklyScheduleRule(
                    checkInLocalFridaySpringSemester, lastLocalSundaySpringSemester, semesterWeeklySchedule, executionOrder));
            }
            // lastLocalFridaySpringSemester - checkInLocalFridayFallSemester: summer semester
            if (lastLocalSundaySpringSemester && checkInLocalFridayFallSemester) {
                let firstLocalDateSummerSemester = new Date(+lastLocalSundaySpringSemester + MILLISECONDS_IN_DAY);
                let lastLocalDateSummerSemester = new Date(+checkInLocalFridayFallSemester - MILLISECONDS_IN_DAY);
                this.addRule(new BusPatternCalendarWeeklyScheduleRule(
                    firstLocalDateSummerSemester, lastLocalDateSummerSemester, vacationWeeklySchedule, executionOrder));
            }
            // checkInLocalFridayFallSemester - 12-31: fall semester
            if (checkInLocalFridayFallSemester) {
                this.addRule(new BusPatternCalendarWeeklyScheduleRule(
                    checkInLocalFridayFallSemester, this.lastDayOfYear, semesterWeeklySchedule, executionOrder));
            }
    }

    addHolidayOverride(
        localDate: Date,
        schedule: BusPatternSchedule,
    ): void {
        this.dayOverridesRule.addDayOverride({localDate, schedule});
    }

    addWeekdayOverride(
        localDate: Date,
        schedule: BusPatternSchedule,
    ): void {
        this.dayOverridesRule.addDayOverride({localDate, schedule});
    }

    addLongHolidayRules(
        weekendStartLocalDate: Date,
        weekendEndLocalDate: Date,
        weekendSchedule: BusPatternSchedule,
        weekendExecutionOrder: number,
        holidayLocalDates: Date[],
        holidaySchedule: BusPatternSchedule,
    ): void {
        if (!weekendExecutionOrder) {
            weekendExecutionOrder = this.vendExecutionOrder();
        }

        if (+weekendStartLocalDate < +this.firstDayOfYear) {
            throw new Error("weekendStartLocalDate < firstDayOfYear, " + weekendStartLocalDate + " < " + this.firstDayOfYear);
        }
        if (+weekendEndLocalDate > +this.lastDayOfYear) {
            throw new Error("weekendEndLocalDate > lastDayOfYear, " + weekendEndLocalDate + " > " + this.lastDayOfYear);
        }

        this.addRule(new BusPatternCalendarWeeklyScheduleRule(
            weekendStartLocalDate, weekendEndLocalDate, Array(7).fill(weekendSchedule), weekendExecutionOrder));
        holidayLocalDates.forEach(holidayLocalDate => {
            this.dayOverridesRule.addDayOverride({localDate: holidayLocalDate, schedule: holidaySchedule});
        });
    }

    addExamWeeksRules(
        startLocalDate: Date,
        endLocalDate: Date,
        weeklySchedule: BusPatternSchedule[],
        executionOrder?: number,
    ): void {
        if (!executionOrder) {
            executionOrder = this.vendExecutionOrder();
        }

        if (+startLocalDate < +this.firstDayOfYear) {
            throw new Error("startLocalDate < firstDayOfYear, " + startLocalDate + " < " + this.firstDayOfYear);
        }
        if (+endLocalDate > +this.lastDayOfYear) {
            throw new Error("endLocalDate > lastDayOfYear, " + endLocalDate + " > " + this.lastDayOfYear);
        }

        this.addRule(new BusPatternCalendarWeeklyScheduleRule(
            startLocalDate, endLocalDate, weeklySchedule, executionOrder));
    }

    /**
     * Convert to calendar entry, and enforce scheduleDays rule.
     * @returns DataBusPatternCalendarByMonth
     */
    toCalendar(failOnNoResult: boolean): DataBusPatternCalendarByMonth {
        let result = super.toCalendar(failOnNoResult);
        result.forEach(m => {m.forEach(d => {
            if (!(d in ScheduleDays)) {
                throw new Error("Value not in ScheduleDays: " + d);
            }
        })});
        return result;
    }
};