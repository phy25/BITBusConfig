import { TimeAsInt } from "./modelsDataType";

export class BusSingleTimetable {
    timetable: TimeAsInt[] = [];

    toJSON(): number[] {
        let list = this.timetable.map(t => t.toJSON());
        list.sort((a, b) => +a - b);
        return list;
    }

    addStepTimetable(start: TimeAsInt, end: TimeAsInt, minutes: number): void {
        this.addStepTimetableFromInt(start.toJSON(), end.toJSON(), minutes);
    }

    addStepTimetableFromInt(startInt: number, endInt: number, minutes: number): void {
        for (let int = startInt; int <= endInt; int += minutes) {
            this.timetable.push(TimeAsInt.fromInt(int));
        }
    }

    addTime(time: TimeAsInt): void {
        this.timetable.push(time);
    }
}