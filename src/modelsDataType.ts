export class TimeAsInt {
    static readonly MINUTES_PER_HOUR = 60;
    hour: number;
    minute: number;
    constructor(hour: number, minute: number) {
        this.hour = hour;
        this.minute = minute;
    }

    toJSON(): number {
        return this.hour * TimeAsInt.MINUTES_PER_HOUR + this.minute;
    }
}

export type BusPatternSchedule = number;

export function getLocalDateFromString(datestr: string): Date {
    let date = new Date(datestr);
    return new Date(+date + date.getTimezoneOffset() * 60000);
}