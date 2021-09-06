import { DataBusesListItem } from "./models";

export type BusScheduleDayLineMap = Map<number, string[]>;

export function convertKeyToNumber(entry: [string, any]): [number, any]{
    return [+entry[0], entry[1]];
};

export class BusScheduleStop {
    stopId: string;
    hour: number;
    minute: number;
    fade?: number;

    constructor(stopId: string, hour: number, minute: number, fade?: number) {
        this.stopId = stopId;
        this.hour = hour;
        this.minute = minute;
        if (fade) {
            this.fade = fade;
        }
    }
}

export class BusLine {
    id: string;
    type: number;
    coaches: number;
    remark?: string;
    labelSm?: string;
    stops: BusScheduleStop[] = [];
    days: number[] = [];

    constructor(id: string, type: number, coaches: number, remark?: string, labelSm?: string) {
        this.id = id;
        this.type = type;
        this.coaches = coaches;
        this.remark = remark;
    }

    addStops(stops: BusScheduleStop[]): void {
        this.stops.push(...stops);
    }

    addStopsSelf(stops: BusScheduleStop[]): BusLine {
        this.addStops(stops);
        return this;
    }

    addDay(day: number): void {
        if (this.days.includes(day)) {
            throw new Error("Duplicate day "+ day + " in busLine ID"+ this.id);
        }
        this.days.push(day);
    }

    toJSON(): DataBusesListItem {
        let item: DataBusesListItem = {
            id: this.id,
            type: this.type,
            coaches: this.coaches,
            days: this.days,
            stops: [],
            time: [],
            stopsFade: [],
        };

        if (this.remark){
            item.remark = this.remark;
        }

        if (this.labelSm) {
            item["label-sm"] = this.labelSm;
        }

        this.stops.forEach(stop => {
            item.stops.push(stop.stopId);
            item.time.push(stop.hour);
            item.time.push(stop.minute);
            item.stopsFade.push(stop.fade || 0);
        });

        // temp optimization for stopsFade
        if (item.stopsFade.filter(e => !!e).length == 0) {
            delete item.stopsFade;
        }

        return item;
    }
};

export class BusesDestList {
    idMap: Map<string, BusLine>;

    constructor() {
        this.idMap = new Map();
    }

    push(item: BusLine): void {
        if (this.idMap.has(item.id)) {
            throw new Error("bus ID already existed: " + item.id);
        }
        this.idMap.set(item.id, item);
    }

    getById(busId: string): BusLine {
        return this.idMap.get(busId);
    }

    applySchedule(schedule: BusScheduleDayLineMap): void {
        schedule.forEach((idList, day) => {
            idList.forEach(busId => {
                this.getById(busId).addDay(day);
            });
        });
    }

    toJSON(): DataBusesListItem[] {
        return Array.from(this.idMap.values()).map(item => item.toJSON());
    }
};