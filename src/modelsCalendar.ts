import { DataBusPatternCalendarByMonth } from "./models";
import { BusPatternCalendarRule } from "./modelsCalendarRules";

export class BusPatternCalendarYear {
    year: number;
    rules: BusPatternCalendarRule[];

    constructor(year: number) {
        this.year = year;
    }

    addRule(rule: BusPatternCalendarRule) {
        this.rules.push(rule);
        this.rules.sort((a, b) => a.executionOrder - b.executionOrder);
    }

    toCalendar(failOnNoResult: boolean): DataBusPatternCalendarByMonth {
        if (failOnNoResult) {
            throw new Error("Not implemented");
        }
        return [];
    }

    toJSON(): DataBusPatternCalendarByMonth {
        return this.toCalendar(true);
    }
}