import { DataBusPatternCalendarByMonth } from "./models";
import { BusPatternCalendarDayOverridesYearSingletonRule, BusPatternCalendarRule } from "./modelsCalendarRules";
import { BusPatternSchedule, getLocalDateFromString, MILLISECONDS_IN_DAY } from "./modelsDataType";

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
        const startLocalDate = getLocalDateFromString(this.year + '-01-01');
        const endLocalDate = getLocalDateFromString((this.year + 1) + '-01-01');
        const endTimestamp = +endLocalDate;
        let calendar: DataBusPatternCalendarByMonth = [];
        [...Array(12).keys()].forEach(i => {
            calendar[i] = [];
        });

        for (let localTimestamp = +startLocalDate; localTimestamp < endTimestamp; localTimestamp += MILLISECONDS_IN_DAY){
            const localDate = new Date(localTimestamp);
            let schedule: BusPatternSchedule | null = null;

            // call all rules
            this.rules.forEach((rule) => {
                if (rule.isEligible(localDate)) {
                    schedule = rule.getSchedule(localDate);
                }
            });

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