import { DataBusesListItem } from "./models";

export class BusScheduleStop {
    stopId: string;
    hour: number;
    minute: number;
    fade: number;

    constructor(stopId: string, hour: number, minute: number, fade: number) {
        this.stopId = stopId;
        this.hour = hour;
        this.minute = minute;
        this.fade = fade;
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

    addDays(days: number[]): void {
        this.days.push(...days);
    }

    addDaysSelf(days: number[]): BusLine {
        this.addDays(days);
        return this;
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

        return item;
    }
};