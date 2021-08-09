import { BusPatternSchedule } from "./modelsDataType";

export type BusPatternCalendarDayOverrideMap = Map<number, Map<number, BusPatternSchedule>>;

export interface BusPatternCalendarDayOverride {
    localDate: Date;
    schedule: BusPatternSchedule;
}

export abstract class BusPatternCalendarRule {
    abstract readonly executionOrder: number;
    abstract isEligible(localDate: Date): boolean;
    abstract getSchedule(localDate: Date): BusPatternSchedule;
}

export class BusPatternCalendarWeeklyScheduleRule implements BusPatternCalendarRule {
    static readonly DEFAULT_EXECUTION_ORDER = 10;
    readonly executionOrder: number;

    private startTimestamp: number;
    private endTimestamp: number;
    private weeklySchedule: BusPatternSchedule[]; // weekday order in the array - SMTWTFS

    constructor(localStartDate: Date, localEndDate: Date, weeklySchedule: BusPatternSchedule[], executionOrder?: number) {
        this.executionOrder = executionOrder ?? BusPatternCalendarWeeklyScheduleRule.DEFAULT_EXECUTION_ORDER;

        let offsetedLocalStartDate = new Date(+localStartDate);
        let offsetedLocalEndDate = new Date(+localEndDate);

        offsetedLocalStartDate.setHours(0);
        offsetedLocalStartDate.setMinutes(0);
        offsetedLocalStartDate.setSeconds(0);
        offsetedLocalStartDate.setMilliseconds(0);

        offsetedLocalEndDate.setHours(0);
        offsetedLocalEndDate.setMinutes(0);
        offsetedLocalEndDate.setSeconds(0);
        offsetedLocalEndDate.setMilliseconds(0);
        offsetedLocalEndDate = new Date(+offsetedLocalEndDate + 1000 * 60 * 60 * 24 - 1);

        this.startTimestamp = +offsetedLocalStartDate;
        this.endTimestamp = +offsetedLocalEndDate;

        if (this.startTimestamp > this.endTimestamp) {
            throw new Error("startDate > endTimestamp, " + offsetedLocalStartDate + " > " + offsetedLocalEndDate);
        }

        if (weeklySchedule.length != 7) {
            throw new Error("weeklySchedule should have 7 entries, actual " + weeklySchedule.length);
        }

        this.weeklySchedule = weeklySchedule;
    }

    isEligible(localDate: Date): boolean {
        let timestamp = +localDate;
        return this.startTimestamp <= timestamp && timestamp <= this.endTimestamp;
    }

    getSchedule(localDate: Date): BusPatternSchedule {
        return this.weeklySchedule[localDate.getDay()];
    }
}

export class BusPatternCalendarDayOverridesYearSingletonRule implements BusPatternCalendarRule {
    static readonly DEFAULT_EXECUTION_ORDER = 20;
    readonly executionOrder;
    readonly year: number;

    private dayOverrides: BusPatternCalendarDayOverrideMap;

    constructor(year: number, executionOrder?: number) {
        this.executionOrder = executionOrder ?? BusPatternCalendarDayOverridesYearSingletonRule.DEFAULT_EXECUTION_ORDER;

        this.year = year;
        this.dayOverrides = new Map();
        [...Array(12).keys()].forEach(i => {
            this.dayOverrides.set(i, new Map());
        });
    }

    addDayOverride(obj: BusPatternCalendarDayOverride): void {
        if (obj.localDate.getFullYear() !== this.year) {
            throw new Error("Overrides not in target year " + this.year + ": " + obj.localDate);
        }
        this.dayOverrides.get(obj.localDate.getMonth()).set(obj.localDate.getDate(), obj.schedule);
    }

    isEligible(localDate: Date): boolean {
        return localDate.getFullYear() == this.year && this.dayOverrides.get(localDate.getMonth()).has(localDate.getDate());
    }

    getSchedule(localDate: Date): BusPatternSchedule {
        return this.dayOverrides.get(localDate.getMonth()).get(localDate.getDate());
    }
}
