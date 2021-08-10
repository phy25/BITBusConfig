export class TimeAsInt {
    static readonly MINUTES_PER_HOUR = 60;
    static readonly HOURS_PER_DAY = 24;
    static readonly MINUTES_PER_DAY = TimeAsInt.MINUTES_PER_HOUR * TimeAsInt.HOURS_PER_DAY;

    static fromInt(int: number): TimeAsInt {
        let hour = Math.floor(int / TimeAsInt.MINUTES_PER_HOUR);
        let minute = int % TimeAsInt.MINUTES_PER_HOUR;
        return new TimeAsInt(hour, minute);
    }

    hour: number;
    minute: number;
    constructor(hour: number, minute: number) {
        if (hour < 0 || hour > 23) {
            throw new Error("hour is out of range: " + hour);
        }
        // we allow minute wrapping
        this.hour = hour;
        this.minute = minute;
        this.validate();
    }

    validate(): void {
        let int = this.toJSON();
        if (int < 0 || int >= TimeAsInt.MINUTES_PER_DAY) {
            throw new Error("time is out of range: " + int);
        }
    }

    addMinutes(minute: number): void {
        this.minute += minute;
        this.validate();
    }

    toJSON(): number {
        return this.hour * TimeAsInt.MINUTES_PER_HOUR + this.minute;
    }
}

export type BusPatternSchedule = number;

export function getLocalDateFromString(datestr: string): Date | null {
    if (!datestr) return null;
    let date = new Date(datestr);
    return new Date(+date + date.getTimezoneOffset() * 60000);
}

export const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;